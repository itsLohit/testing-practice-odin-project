const Calculator = require('../code/calculater');

describe('calculator operations', () => {
  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  test('addition', () => {
    expect(calculator.add(5, 2)).toBe(7);
  });
  test('subtraction', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });
  test('multiplication', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
  test('division', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
});
