// Collatz Sequence (Hailstone Numbers):
// Take a number n.
// • If n is even, divide it by 2.
// • If n is odd, multiply it by 3 and add 1.
// • Repeat until n = 1.
// • Count the number of steps to reach 1.

function collatzSequence(n) {
  const sequence = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push(n);
  }
}

// Example usage:
console.log(collatzSequence(6)); // Output: [6, 3, 10, 5, 16, 8, 4, 2, 1]
