import * as http from 'http';
import { URL } from 'url';
import { saySomething, saySomethingWithType, getAvailableTypes, isValidType, ResponseType } from './index';

export interface ServerOptions {
  port?: number;
  host?: string;
}

const DEFAULT_PORT = 3000;
const DEFAULT_HOST = 'localhost';
const MIN_PORT = 1;
const MAX_PORT = 65535;

export class SaySomethingServer {
  private server: http.Server;
  private port: number;
  private host: string;

  constructor(options: ServerOptions = {}) {
    const port = options.port ?? DEFAULT_PORT;
    const host = options.host ?? DEFAULT_HOST;

    // Validate port
    if (!Number.isInteger(port) || port < MIN_PORT || port > MAX_PORT) {
      throw new Error(`Invalid port: ${port}. Port must be between ${MIN_PORT} and ${MAX_PORT}`);
    }

    // Validate host
    if (typeof host !== 'string' || host.trim().length === 0) {
      throw new Error('Invalid host: host must be a non-empty string');
    }

    this.port = port;
    this.host = host.trim();
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
      if (!req.url) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request URL' }));
        return;
      }

      const url = new URL(req.url, `http://${this.host}:${this.port}`);
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
      const timeout = setTimeout(() => {
        reject(new Error('Server start timeout'));
      }, 10000); // 10 second timeout

      this.server.listen(this.port, this.host, () => {
        clearTimeout(timeout);
        console.log(`Say Something server running at http://${this.host}:${this.port}`);
        resolve();
      });

      this.server.on('error', (error: NodeJS.ErrnoException) => {
        clearTimeout(timeout);
        if (error.code === 'EADDRINUSE') {
          reject(new Error(`Port ${this.port} is already in use`));
        } else if (error.code === 'EACCES') {
          reject(new Error(`Permission denied: Cannot bind to port ${this.port}`));
        } else {
          reject(error);
        }
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
  let port = DEFAULT_PORT;
  const host = process.env.HOST || DEFAULT_HOST;

  if (process.env.PORT) {
    const parsedPort = parseInt(process.env.PORT, 10);
    if (isNaN(parsedPort) || parsedPort < MIN_PORT || parsedPort > MAX_PORT) {
      console.error(`Error: Invalid PORT environment variable: ${process.env.PORT}`);
      process.exit(1);
    }
    port = parsedPort;
  }

  startServer({ port, host }).catch((error) => {
    console.error('Failed to start server:', error instanceof Error ? error.message : error);
    process.exit(1);
  });
}

