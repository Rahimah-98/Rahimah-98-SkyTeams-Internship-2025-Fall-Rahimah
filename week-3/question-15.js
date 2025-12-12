function armstrongNumber(num) {
  num = num.toString();
  let numDigits = num.length;
  let sum = 0;
  for (let i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(num[i]), numDigits);
  }

  return sum === parseInt(num);
}

console.log(armstrongNumber(153)); // true
console.log(armstrongNumber(123)); // false
