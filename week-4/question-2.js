// Merge two sorted arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays([1, 2, 3], [4, 5, 6])); // Output: [1, 2, 3, 4, 5, 6]
