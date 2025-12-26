import * as http from 'http';
import { URL } from 'url';
import { saySomething, saySomethingWithType, getAvailableTypes, isValidType, ResponseType } from './index';

export interface ServerOptions {
  port?: number;
  host?: string;
}

export class SaySomethingServer {
  private server: http.Server;
  private port: number;
  private host: string;

  constructor(options: ServerOptions = {}) {
    this.port = options.port || 3000;
    this.host = options.host || 'localhost';
    this.server = http.createServer(this.handleRequest.bind(this));
  }

  private handleRequest(req: http.IncomingMessage, res: http.ServerResponse): void {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      res.end();
      return;
    }

    // Only handle GET requests
    if (req.method !== 'GET') {
      res.writeHead(405, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
      return;
    }

    try {
      const url = new URL(req.url || '/', `http://${this.host}:${this.port}`);
      const pathname = url.pathname;

      // Root endpoint - show available types
      if (pathname === '/' || pathname === '') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          message: 'Say Something API',
          availableTypes: getAvailableTypes(),
          endpoints: {
            '/': 'List all available types',
            '/:type': 'Get a random response of the specified type',
            '/all': 'Get all available types',
          },
        }));
        return;
      }

      // /all endpoint - list all types
      if (pathname === '/all') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          types: getAvailableTypes(),
        }));
        return;
      }

      // Extract type from path (remove leading slash)
      const type = pathname.slice(1);

      // Validate type
      if (!isValidType(type)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          error: `Invalid type: ${type}`,
          availableTypes: getAvailableTypes(),
        }));
        return;
      }

      // Get random response
      const result = saySomethingWithType({ type: type as ResponseType });

      // Check if JSON format is requested
      const format = url.searchParams.get('format');
      if (format === 'json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } else {
        // Plain text response (default)
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(result.message);
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      }));
    }
  }

  start(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.listen(this.port, this.host, () => {
        console.log(`Say Something server running at http://${this.host}:${this.port}`);
        resolve();
      });

      this.server.on('error', (error) => {
        reject(error);
      });
    });
  }

  stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.server.close((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  getPort(): number {
    return this.port;
  }

  getHost(): string {
    return this.host;
  }
}

/**
 * Start the HTTP server
 * @param options - Server options including port and host
 * @returns Promise that resolves when server starts
 */
export async function startServer(options: ServerOptions = {}): Promise<SaySomethingServer> {
  const server = new SaySomethingServer(options);
  await server.start();
  return server;
}

// CLI support - start server if this file is run directly
if (require.main === module) {
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  const host = process.env.HOST || 'localhost';

  startServer({ port, host }).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}

