"use strict";

// Check if Two Arrays Are Equal: Compare two arrays and determine if they contain the same elements in the same order.
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }
}

console.log(compareArrays([1, 2, 3], [1, 2, 3])); // Output: true

console.log(compareArrays([1, 2, 3], [1, 2, 4])); // Output: false
//# sourceMappingURL=question-29.dev.js.map
