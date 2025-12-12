"use strict";

function armstrongNumber(num) {
  num = num.toString();
  var numDigits = num.length;
  var sum = 0;

  for (var i = 0; i < numDigits; i++) {
    sum += Math.pow(parseInt(num[i]), numDigits);
  }

  return sum === parseInt(num);
}

console.log(armstrongNumber(153)); // true

console.log(armstrongNumber(123)); // false
//# sourceMappingURL=question-15.dev.js.map
