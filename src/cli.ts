#!/usr/bin/env node

import { justSayIt, justSayItWithType, getAvailableTypes, isValidType, ResponseType } from './index';

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
Just Say It - Micro-response API

Usage:
  just-say-it [type] [options]

Types:
  ${getAvailableTypes().join(', ')}

Options:
  --json, -j     Output as JSON
  --help, -h     Show this help message
  --list, -l     List all available types

Examples:
  just-say-it no
  just-say-it yes --json
  just-say-it joke
  just-say-it --list
`);
  process.exit(0);
}

if (args[0] === '--list' || args[0] === '-l') {
  console.log('Available types:');
  getAvailableTypes().forEach((type) => {
    console.log(`  - ${type}`);
  });
  process.exit(0);
}

const typeArg = args[0];
const jsonOutput = args.includes('--json') || args.includes('-j');

if (!isValidType(typeArg)) {
  console.error(`Error: Invalid type "${typeArg}"`);
  console.error(`Available types: ${getAvailableTypes().join(', ')}`);
  process.exit(1);
}

try {
  if (jsonOutput) {
    const result = justSayItWithType({ type: typeArg as ResponseType });
    console.log(JSON.stringify(result, null, 2));
  } else {
    const message = justSayIt(typeArg as ResponseType);
    console.log(message);
  }
} catch (error) {
  console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
  process.exit(1);
}

