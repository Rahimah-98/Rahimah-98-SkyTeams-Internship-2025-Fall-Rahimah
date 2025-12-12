"use strict";

// Write a function to count occurrences of an element in an array: Count how many times a given number appears in the array
function countOccurrences(arr, num) {
  var count = 0;
  return count = arr.filter(function (el) {
    return el === num;
  }).length;
}

var arr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(arr, 2)); // Output: 3

console.log(countOccurrences(arr, 3)); // Output: 1
//# sourceMappingURL=question-9.dev.js.map
