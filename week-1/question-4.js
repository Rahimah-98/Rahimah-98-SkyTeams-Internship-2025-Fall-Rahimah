// Write a function to reverse a string/list

function reverseStr(str) {
  const revsStr = str.split('').reverse().join('');

  return revsStr;
}

console.log(reverseStr('Hello'));
