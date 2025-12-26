import { ResponseType, responses } from './responses';
export { ResponseType, responses };
export interface JustSayItOptions {
    type?: ResponseType;
}
export interface JustSayItResult {
    type: ResponseType;
    message: string;
}
/**
 * Get a random response of the specified type
 * @param type - The type of response to get (defaults to 'no')
 * @returns A random response message
 * @throws Error if the type is invalid
 */
export declare function justSayIt(type?: ResponseType): string;
/**
 * Get a random response with metadata
 * @param options - Options including the response type (defaults to 'no')
 * @returns An object containing the type and message
 * @throws Error if the type is invalid
 */
export declare function justSayItWithType(options?: JustSayItOptions): JustSayItResult;
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
    justSayIt: typeof justSayIt;
    justSayItWithType: typeof justSayItWithType;
    getAvailableTypes: typeof getAvailableTypes;
    isValidType: typeof isValidType;
};
export default _default;
export declare const saySomething: typeof justSayIt;
export declare const saySomethingWithType: typeof justSayItWithType;
export type SaySomethingOptions = JustSayItOptions;
export type SaySomethingResult = JustSayItResult;
//# sourceMappingURL=index.d.ts.map