"use strict";

// Reverse a number:
var reverseNumber = function reverseNumber(num) {
  var originalNumStr = num.toString();
  var reversedNumStr = originalNumStr.split('').reverse().join('');
  return reversedNumStr;
};

console.log(reverseNumber(12345)); // Output: 54321
//# sourceMappingURL=question-19.dev.js.map
