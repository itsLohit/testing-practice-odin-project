const caesarCipher = require('../code/caesarCipher');

describe('caesarCipher', () => {
  test('caesarCipher shifts normal', () => {
    expect(caesarCipher('def', 3)).toBe('ghi');
  });
  test('caesarCipher shifts after z', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('caesarCipher shifts after z test 2', () => {
    expect(caesarCipher('qrstuvwxyzabc', 3)).toBe('tuvwxyzabcdef');
  });
  test('caesarCipher shifts with uppercase', () => {
    expect(caesarCipher('HELLO', 3)).toBe('KHOOR');
  });
  test('caesarCipher shifts with mixed lettercase', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test('caesarCipher shifts with punctuations', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
