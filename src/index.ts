import { getRandomResponse, getAllResponseTypes, ResponseType, responses, isValidResponseType } from './responses';

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
 * @param type - The type of response to get
 * @returns A random response message
 */
export function saySomething(type: ResponseType = 'no'): string {
  return getRandomResponse(type);
}

/**
 * Get a random response with metadata
 * @param options - Options including the response type
 * @returns An object containing the type and message
 */
export function saySomethingWithType(options: SaySomethingOptions = {}): SaySomethingResult {
  const type = options.type || 'no';
  return {
    type,
    message: getRandomResponse(type),
  };
}

/**
 * Get all available response types
 * @returns Array of all available response types
 */
export function getAvailableTypes(): ResponseType[] {
  return getAllResponseTypes();
}

/**
 * Check if a response type is valid
 * @param type - The type to check
 * @returns True if the type is valid
 */
export function isValidType(type: string): type is ResponseType {
  return isValidResponseType(type);
}

// Default export
export default {
  saySomething,
  saySomethingWithType,
  getAvailableTypes,
  isValidType,
};

