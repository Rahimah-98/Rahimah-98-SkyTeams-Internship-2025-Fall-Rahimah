//  Sum of digits of a number:  Calculate the sum of all digits in a given number

function sumOfDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}
console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(123456)); // Output: 21
