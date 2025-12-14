//  Remove Duplicates from an Array: Remove duplicate elements efficiently from an array

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(removeDuplicates([3, 1, 3, 5, 1])); // Output: [3, 1, 5]

function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicates([3, 1, 3, 5, 1])); // Output: [3, 1, 5]
