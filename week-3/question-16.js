// Fibonacci sequence: Print the Fibonacci sequence up to N terms.

function fibonacci(n) {
  let fibSequence = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibSequence.push(0);
    } else if (i === 1) {
      fibSequence.push(1);
    } else {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
  }
  return fibSequence;
}

console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(1)); // Output: [0]
console.log(fibonacci(0)); // Output: []
