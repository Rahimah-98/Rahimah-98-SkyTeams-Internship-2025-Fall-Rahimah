// Write a function to find the sum of all elements in an array: Calculate the total sum of all array elements.

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumOfArray(numbers)); // Output: 15
