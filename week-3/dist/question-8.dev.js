"use strict";

// Write a function to check if an array contains a specific element:  Determine if a given element exists in the array
function containsElement(arr, el) {
  return arr.includes(el) ? 'Found' : 'Not Found';
}

var arr = [1, 2, 3, 4, 5];
console.log(containsElement(arr, 3)); // Output: 'Found'

console.log(containsElement(arr, 6)); // Output: 'Not Found'
//# sourceMappingURL=question-8.dev.js.map
