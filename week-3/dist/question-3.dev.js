"use strict";

//  Sum of digits of a number:  Calculate the sum of all digits in a given number
function sumOfDigits(num) {
  return num.toString().split('').reduce(function (sum, digit) {
    return sum + Number(digit);
  }, 0);
}

console.log(sumOfDigits(123)); // Output: 6

console.log(sumOfDigits(123456)); // Output: 21
//# sourceMappingURL=question-3.dev.js.map
