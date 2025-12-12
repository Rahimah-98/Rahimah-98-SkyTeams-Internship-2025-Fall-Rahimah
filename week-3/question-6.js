// Write a function to find the smallest element in an array:  Find and return the smallest number in an array

function smallestNum(arr) {
  let smallest = arr[0];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(smallestNum([12, 2, 3, 15, 20, 4, 5])); // Output: 2
console.log(smallestNum([-10, -5, -3, -1])); // Output: -10
console.log(smallestNum([1, 2, 3, 4, 5])); // Output: 1
