"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responses = void 0;
exports.saySomething = saySomething;
exports.saySomethingWithType = saySomethingWithType;
exports.getAvailableTypes = getAvailableTypes;
exports.isValidType = isValidType;
const responses_1 = require("./responses");
Object.defineProperty(exports, "responses", { enumerable: true, get: function () { return responses_1.responses; } });
/**
 * Get a random response of the specified type
 * @param type - The type of response to get (defaults to 'no')
 * @returns A random response message
 * @throws Error if the type is invalid
 */
function saySomething(type = 'no') {
    if (!(0, responses_1.isValidResponseType)(type)) {
        throw new Error(`Invalid response type: "${type}". Available types: ${(0, responses_1.getAllResponseTypes)().join(', ')}`);
    }
    return (0, responses_1.getRandomResponse)(type);
}
/**
 * Get a random response with metadata
 * @param options - Options including the response type (defaults to 'no')
 * @returns An object containing the type and message
 * @throws Error if the type is invalid
 */
function saySomethingWithType(options = {}) {
    const type = options.type || 'no';
    if (!(0, responses_1.isValidResponseType)(type)) {
        throw new Error(`Invalid response type: "${type}". Available types: ${(0, responses_1.getAllResponseTypes)().join(', ')}`);
    }
    return {
        type,
        message: (0, responses_1.getRandomResponse)(type),
    };
}
/**
 * Get all available response types
 * @returns Array of all available response types
 */
function getAvailableTypes() {
    return (0, responses_1.getAllResponseTypes)();
}
/**
 * Check if a response type is valid
 * @param type - The type to check
 * @returns True if the type is valid
 */
function isValidType(type) {
    return (0, responses_1.isValidResponseType)(type);
}
// Default export
exports.default = {
    saySomething,
    saySomethingWithType,
    getAvailableTypes,
    isValidType,
};
//# sourceMappingURL=index.js.map