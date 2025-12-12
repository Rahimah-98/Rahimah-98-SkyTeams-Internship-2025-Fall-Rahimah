// Write a function to count occurrences of an element in an array: Count how many times a given number appears in the array
function countOccurrences(arr, num) {
  let count = 0;
  return (count = arr.filter((el) => el === num).length);
}

const arr = [1, 2, 3, 2, 4, 2, 5];
console.log(countOccurrences(arr, 2)); // Output: 3
console.log(countOccurrences(arr, 3)); // Output: 1
