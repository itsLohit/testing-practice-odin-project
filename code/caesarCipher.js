function caesarCipher(string, num) {
  const alphabets = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let s = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      let index = alphabets.indexOf(string[i]) + num;
      if (index > 25) {
        index = index - 26;
      }
      if (alphabets.indexOf(string[i]) === -1) {
        s += string[i];
      } else {
        s += alphabets[index];
      }
    } else if (string[i] === string[i].toUpperCase()) {
      let index = alphabets.indexOf(string[i].toLowerCase()) + num;
      if (index > 25) {
        index = index - 26;
      }
      if (alphabets.indexOf(string[i].toLowerCase()) === -1) {
        s += string[i];
      } else {
        s += alphabets[index].toUpperCase();
      }
    }
  }

  return s;
}

module.exports = caesarCipher;
