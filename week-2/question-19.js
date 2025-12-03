// Reverse a number:

const reverseNumber = (num) => {
  const originalNumStr = num.toString();
  const reversedNumStr = originalNumStr.split('').reverse().join('');

  return reversedNumStr;
};

console.log(reverseNumber(12345)); // Output: 54321
