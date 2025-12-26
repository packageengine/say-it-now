#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Say It Now - Micro-response API

Usage:
  say-it-now [type] [options]

Types:
  ${(0, index_1.getAvailableTypes)().join(', ')}

Options:
  --json, -j     Output as JSON
  --help, -h     Show this help message
  --list, -l     List all available types

Examples:
  say-it-now no
  say-it-now yes --json
  say-it-now joke
  say-it-now --list
`);
    process.exit(0);
}
if (args[0] === '--list' || args[0] === '-l') {
    console.log('Available types:');
    (0, index_1.getAvailableTypes)().forEach((type) => {
        console.log(`  - ${type}`);
    });
    process.exit(0);
}
const typeArg = args[0];
const jsonOutput = args.includes('--json') || args.includes('-j');
if (!(0, index_1.isValidType)(typeArg)) {
    console.error(`Error: Invalid type "${typeArg}"`);
    console.error(`Available types: ${(0, index_1.getAvailableTypes)().join(', ')}`);
    process.exit(1);
}
try {
    if (jsonOutput) {
        const result = (0, index_1.sayItNowWithType)({ type: typeArg });
        console.log(JSON.stringify(result, null, 2));
    }
    else {
        const message = (0, index_1.sayItNow)(typeArg);
        console.log(message);
    }
}
catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
}
//# sourceMappingURL=cli.js.map