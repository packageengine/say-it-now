/**
 * Response types registry
 * Centralized export of all response types and their data
 */

import { noResponses } from './no';
import { yesResponses } from './yes';
import { maybeResponses } from './maybe';
import { jokeResponses } from './joke';
import { motivationResponses } from './motivation';
import { thankYouResponses } from './thank-you';
import { apologyResponses } from './apology';

export type ResponseType = 'no' | 'yes' | 'maybe' | 'joke' | 'motivation' | 'thank-you' | 'apology';

/**
 * Registry of all response types and their data
 */
export const responses: Record<ResponseType, readonly string[]> = {
  no: noResponses,
  yes: yesResponses,
  maybe: maybeResponses,
  joke: jokeResponses,
  motivation: motivationResponses,
  'thank-you': thankYouResponses,
  apology: apologyResponses,
} as const;

/**
 * Get a random response from the specified type
 * @param type - The response type
 * @returns A random response string
 * @throws Error if the type is invalid
 */
export function getRandomResponse(type: ResponseType): string {
  const responseList = responses[type];
  if (!responseList || responseList.length === 0) {
    throw new Error(`Unknown response type: ${type}`);
  }
  const randomIndex = Math.floor(Math.random() * responseList.length);
  return responseList[randomIndex];
}

/**
 * Get all available response types
 * @returns Array of all available response types
 */
export function getAllResponseTypes(): ResponseType[] {
  return Object.keys(responses) as ResponseType[];
}

/**
 * Validate if a string is a valid response type
 * @param type - The type to validate
 * @returns True if the type is valid
 */
export function isValidResponseType(type: string): type is ResponseType {
  return type in responses;
}

