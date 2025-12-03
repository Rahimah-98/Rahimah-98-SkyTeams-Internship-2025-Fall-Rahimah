//  calculate the sum of all digit of a number

const sumOfDigits = (num) => {
  let sum = 0;
  for (let digit of num.toString()) {
    sum += parseInt(digit, 10);
  }
  return sum;
};

console.log(sumOfDigits(123)); // Output: 6
console.log(sumOfDigits(4567)); // Output: 22
