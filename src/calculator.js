#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - addition       (add)       a + b
 *   - subtraction    (subtract)  a - b
 *   - multiplication (multiply)  a * b
 *   - division       (divide)    a / b  (throws on division by zero)
 *
 * Usage:
 *   node src/calculator.js <operation> <a> <b>
 *   e.g. node src/calculator.js add 2 3   ->  5
 */

// addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// division: returns the quotient of a and b
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

const operations = { add, subtract, multiply, divide };

function main(argv) {
  const [op, rawA, rawB] = argv;
  const fn = operations[op];
  const a = Number(rawA);
  const b = Number(rawB);

  if (!fn || Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Usage: node src/calculator.js <add|subtract|multiply|divide> <a> <b>");
    process.exitCode = 1;
    return;
  }

  try {
    console.log(fn(a, b));
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { add, subtract, multiply, divide };
