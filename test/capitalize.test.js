const capitalize = require('../code/capitalize');

describe('capitalize', () => {
  test('capitalize first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });
  test('capitalize single letter', () => {
    expect(capitalize('a')).toBe('A');
  });
  test('doesnot modify already capitalized letters', () => {
    expect(capitalize('Hello world')).toBe('Hello world');
  });
  test('work with empty string', () => {
    expect(capitalize('')).toBe('');
  });
});
