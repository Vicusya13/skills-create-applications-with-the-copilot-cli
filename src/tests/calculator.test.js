const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

describe("basic operations", () => {
  test("addition: 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtraction: 10 - 4 = 6", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("multiplication: 45 * 2 = 90", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("division: 20 / 5 = 4", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("division by zero throws", () => {
    expect(() => divide(1, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("modulo", () => {
  test("modulo: 5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("modulo with no remainder: 10 % 5 = 0", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("modulo by zero throws", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed");
  });
});

describe("power", () => {
  test("power: 2 ^ 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("power with exponent 0 = 1", () => {
    expect(power(7, 0)).toBe(1);
  });

  test("power with negative exponent: 2 ^ -1 = 0.5", () => {
    expect(power(2, -1)).toBe(0.5);
  });
});

describe("squareRoot", () => {
  test("square root of 16 = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("square root of 0 = 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of a negative number throws", () => {
    expect(() => squareRoot(-4)).toThrow(
      "Square root of a negative number is not allowed"
    );
  });
});
