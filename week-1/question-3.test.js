function testSumOfNums() {
  // Test case 1
  let arr1 = [2, 3, 4, 5];
  let expected1 = 14;
  let actual1 = sumOfNums(arr1);
  console.log(actual1 === expected1 ? 'Passed' : 'Failed');

  // Test case 2
  let arr2 = [0, 0, 0];
  let expected2 = 0;
  let actual2 = sumOfNums(arr2);
  console.log(actual2 === expected2 ? 'Passed' : 'Failed');

  // Test case 3
  let arr3 = [10, -2, 5];
  let expected3 = 13;
  let actual3 = sumOfNums(arr3);
  console.log(actual3 === expected3 ? 'Passed' : 'Failed');
}
