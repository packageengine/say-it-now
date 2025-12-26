import { ResponseType, responses } from './responses';
export { ResponseType, responses };
export interface SaySomethingOptions {
    type?: ResponseType;
}
export interface SaySomethingResult {
    type: ResponseType;
    message: string;
}
/**
 * Get a random response of the specified type
 * @param type - The type of response to get (defaults to 'no')
 * @returns A random response message
 * @throws Error if the type is invalid
 */
export declare function saySomething(type?: ResponseType): string;
/**
 * Get a random response with metadata
 * @param options - Options including the response type (defaults to 'no')
 * @returns An object containing the type and message
 * @throws Error if the type is invalid
 */
export declare function saySomethingWithType(options?: SaySomethingOptions): SaySomethingResult;
/**
 * Get all available response types
 * @returns Array of all available response types
 */
export declare function getAvailableTypes(): ResponseType[];
/**
 * Check if a response type is valid
 * @param type - The type to check
 * @returns True if the type is valid
 */
export declare function isValidType(type: string): type is ResponseType;
declare const _default: {
    saySomething: typeof saySomething;
    saySomethingWithType: typeof saySomethingWithType;
    getAvailableTypes: typeof getAvailableTypes;
    isValidType: typeof isValidType;
};
export default _default;
//# sourceMappingURL=index.d.ts.map