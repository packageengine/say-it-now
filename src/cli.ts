#!/usr/bin/env node

import { sayItNow, sayItNowWithType, getAvailableTypes, isValidType, ResponseType } from './index';

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
Say It Now - Micro-response API

Usage:
  say-it-now [type] [options]

Types:
  ${getAvailableTypes().join(', ')}

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
    const result = sayItNowWithType({ type: typeArg as ResponseType });
    console.log(JSON.stringify(result, null, 2));
  } else {
    const message = sayItNow(typeArg as ResponseType);
    console.log(message);
  }
} catch (error) {
  console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
  process.exit(1);
}

