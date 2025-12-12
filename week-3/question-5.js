//  Write a function to find the largest element in an array: Given an array of numbers, return the largest value

function largestNum(arr) {
  let largest = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNum([12, 2, 3, 15, 20, 4, 5])); // Output: 20
console.log(largestNum([-10, -5, -3, -1])); // Output: -1
