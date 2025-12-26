"use strict";
/**
 * Main responses module
 * Re-exports from the responses directory for backward compatibility
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidResponseType = exports.getAllResponseTypes = exports.getRandomResponse = exports.responses = void 0;
var index_1 = require("./responses/index");
Object.defineProperty(exports, "responses", { enumerable: true, get: function () { return index_1.responses; } });
Object.defineProperty(exports, "getRandomResponse", { enumerable: true, get: function () { return index_1.getRandomResponse; } });
Object.defineProperty(exports, "getAllResponseTypes", { enumerable: true, get: function () { return index_1.getAllResponseTypes; } });
Object.defineProperty(exports, "isValidResponseType", { enumerable: true, get: function () { return index_1.isValidResponseType; } });
//# sourceMappingURL=responses.js.map