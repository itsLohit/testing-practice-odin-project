const reverseString = require('../code/reverseString');

describe('reverseString', () => {
  test('string only with letters are reversed', () => {
    expect(reverseString('hai')).toBe('iah');
  });
  test('single letter gives single letter', () => {
    expect(reverseString('b')).toBe('b');
  });
  test('string with numbers and letters are reversed', () => {
    expect(reverseString('b564kh5k')).toBe('k5hk465b');
  });
  test('string with only numbers are reversed', () => {
    expect(reverseString('56425')).toBe('52465');
  });
  test('empty string should return empty string', () => {
    expect(reverseString('')).toBe('');
  });
});
