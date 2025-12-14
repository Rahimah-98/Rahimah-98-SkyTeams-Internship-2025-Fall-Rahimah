// Find Missing Number in Array (1 to N): Given numbers from 1 to N with one missing, find the missing number

function findMissingNum(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNum([1, 2, 3, 5], 5)); // Output: 4
console.log(findMissingNum([2, 3, 4, 5, 6], 6)); // Output: 1
