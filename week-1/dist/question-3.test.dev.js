"use strict";

function testSumOfNums() {
  // Test case 1
  var arr1 = [2, 3, 4, 5];
  var expected1 = 14;
  var actual1 = sumOfNums(arr1);
  console.log(actual1 === expected1 ? 'Passed' : 'Failed'); // Test case 2

  var arr2 = [0, 0, 0];
  var expected2 = 0;
  var actual2 = sumOfNums(arr2);
  console.log(actual2 === expected2 ? 'Passed' : 'Failed'); // Test case 3

  var arr3 = [10, -2, 5];
  var expected3 = 13;
  var actual3 = sumOfNums(arr3);
  console.log(actual3 === expected3 ? 'Passed' : 'Failed');
}
//# sourceMappingURL=question-3.test.dev.js.map
