"use strict";

// Find the second largest number without sorting the array.
function findSecondLargest(arr) {
  var secondLargest = arr[0];

  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      secondLargest = arr[i - 1];
    }
  }

  console.log(secondLargest);
}

findSecondLargest([10, 20, 4, 45, 99]); // Output: 45
//# sourceMappingURL=question-1.dev.js.map
