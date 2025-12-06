"use strict";

function printEvenNumInRange(str, end) {
  var evenNums = [];

  for (var i = str; i <= end; i++) {
    if (i % 2 === 0) {
      evenNums.push(i);
    }
  }

  return evenNums;
}

console.log(printEvenNumInRange(3, 15)); // Output: [4, 6, 8, 10, 12, 14]

console.log(printEvenNumInRange(10, 20)); // Output: [10, 12, 14, 16, 18, 20]
//# sourceMappingURL=question-22.dev.js.map
