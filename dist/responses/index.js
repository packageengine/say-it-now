"use strict";
/**
 * Response types registry
 * Centralized export of all response types and their data
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = void 0;
exports.getRandomResponse = getRandomResponse;
exports.getAllResponseTypes = getAllResponseTypes;
exports.isValidResponseType = isValidResponseType;
const no_1 = require("./no");
const yes_1 = require("./yes");
const maybe_1 = require("./maybe");
const joke_1 = require("./joke");
const motivation_1 = require("./motivation");
const thank_you_1 = require("./thank-you");
const apology_1 = require("./apology");
/**
 * Registry of all response types and their data
 */
exports.responses = {
    no: no_1.noResponses,
    yes: yes_1.yesResponses,
    maybe: maybe_1.maybeResponses,
    joke: joke_1.jokeResponses,
    motivation: motivation_1.motivationResponses,
    'thank-you': thank_you_1.thankYouResponses,
    apology: apology_1.apologyResponses,
};
/**
 * Get a random response from the specified type
 * @param type - The response type
 * @returns A random response string
 * @throws Error if the type is invalid
 */
function getRandomResponse(type) {
    const responseList = exports.responses[type];
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
function getAllResponseTypes() {
    return Object.keys(exports.responses);
}
/**
 * Validate if a string is a valid response type
 * @param type - The type to validate
 * @returns True if the type is valid
 */
function isValidResponseType(type) {
    return type in exports.responses;
}
//# sourceMappingURL=index.js.map