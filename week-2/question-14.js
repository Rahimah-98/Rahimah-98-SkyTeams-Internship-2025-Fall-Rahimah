// Input a character and determine if it’s a vowel, consonant, digit, or special symbol

function charecterChecker(c) {
  const vowels = ['a', 'u', 'i', 'o', 'e'];
  if (c !== vowels) {
    console.log('Consonant');
  } else if (c >= '0' && c <= '9') {
    console.log('Digit');
  } else if (
    (c >= '!' && c <= '/') ||
    (c >= ':' && c <= '@') ||
    (c >= '[' && c <= '`') ||
    (c >= '{' && c <= '~')
  ) {
    console.log('Special Symbol');
  } else {
    console.log('Vowel');
  }
}
