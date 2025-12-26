export interface ServerOptions {
    port?: number;
    host?: string;
}
export declare class SaySomethingServer {
    private server;
    private port;
    private host;
    constructor(options?: ServerOptions);
    private handleRequest;
    start(): Promise<void>;
    stop(): Promise<void>;
    getPort(): number;
    getHost(): string;
}
/**
 * Start the HTTP server
 * @param options - Server options including port and host
 * @returns Promise that resolves when server starts
 */
export declare function startServer(options?: ServerOptions): Promise<SaySomethingServer>;
//# sourceMappingURL=server.d.ts.map