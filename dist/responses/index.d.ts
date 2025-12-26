/**
 * Response types registry
 * Centralized export of all response types and their data
 */
export type ResponseType = 'no' | 'yes' | 'maybe' | 'joke' | 'motivation' | 'thank-you' | 'apology';
/**
 * Registry of all response types and their data
 */
export declare const responses: Record<ResponseType, readonly string[]>;
/**
 * Get a random response from the specified type
 * @param type - The response type
 * @returns A random response string
 * @throws Error if the type is invalid
 */
export declare function getRandomResponse(type: ResponseType): string;
/**
 * Get all available response types
 * @returns Array of all available response types
 */
export declare function getAllResponseTypes(): ResponseType[];
/**
 * Validate if a string is a valid response type
 * @param type - The type to validate
 * @returns True if the type is valid
 */
export declare function isValidResponseType(type: string): type is ResponseType;
//# sourceMappingURL=index.d.ts.map