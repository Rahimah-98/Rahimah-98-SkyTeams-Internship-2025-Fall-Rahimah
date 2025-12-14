"use strict";

// Find Unique Elements in an Array: Return an array with only unique elements from the input array
function findUniqueElements(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}

console.log(findUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
//# sourceMappingURL=question-27.dev.js.map
