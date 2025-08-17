function reverseString(string) {
  let s = '';
  for (let i = string.length-1; i >= 0; i--) {
    s += string[i];
  }
  return s;
}

module.exports = reverseString;
