"use strict";

// Write a function to find the sum of all elements in an array: Calculate the total sum of all array elements.
function sumOfArray(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

var numbers = [1, 2, 3, 4, 5];
console.log(sumOfArray(numbers)); // Output: 15
//# sourceMappingURL=question-7.dev.js.map
