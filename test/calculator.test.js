const mathOperation = require("../src/calulator");

describe("Calculator test suite", () => {
  test("Addition of two numbers", () => {
    var result = mathOperation.sum(1, 2);

    expect(result).not.toBeNull();
    expect(result).toBe(3);
  });
  test("Subtraction of two numbers", () => {
    var result = mathOperation.diff(1, 2);

    expect(result).not.toBeNull();
    expect(result).toBe(-1);
  });
  test("Multiplication of two numbers", () => {
    var result = mathOperation.product(1, 2);

    expect(result).not.toBeNull();
    expect(result).toBe(2);
  });
  test("Devision of two numbers", () => {
    var result = mathOperation.divide(1, 2);

    expect(result).not.toBeNull();
    expect(result).toBe(0.5);
  });
});
