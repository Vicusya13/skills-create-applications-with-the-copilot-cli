#!/usr/bin/env node
/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - addition       (add)        a + b
 *   - subtraction    (subtract)   a - b
 *   - multiplication (multiply)   a * b
 *   - division       (divide)     a / b      (throws on division by zero)
 *   - modulo         (modulo)     a % b      (throws on modulo by zero)
 *   - power          (power)      base ** exponent
 *   - square root    (squareRoot) sqrt(n)    (throws on negative numbers)
 *
 * Usage:
 *   node src/calculator.js <operation> <a> [b]
 *   e.g. node src/calculator.js add 2 3        ->  5
 *        node src/calculator.js squareRoot 16  ->  4
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

// modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed");
  }
  return a % b;
}

// power: returns base raised to the exponent
function power(base, exponent) {
  return base ** exponent;
}

// square root: returns the square root of n
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed");
  }
  return Math.sqrt(n);
}

const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

function main(argv) {
  const [op, ...rawArgs] = argv;
  const fn = operations[op];
  const args = rawArgs.map(Number);

  if (!fn || args.length !== fn.length || args.some(Number.isNaN)) {
    console.error(
      "Usage: node src/calculator.js <" + Object.keys(operations).join("|") + "> <a> [b]"
    );
    process.exitCode = 1;
    return;
  }

  try {
    console.log(fn(...args));
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
