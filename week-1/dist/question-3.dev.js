"use strict";

// Sum all numbers in a list or array
function sumOfNums(arr) {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

console.log(sumOfNums([2, 3, 4, 5])); // 14
//# sourceMappingURL=question-3.dev.js.map
