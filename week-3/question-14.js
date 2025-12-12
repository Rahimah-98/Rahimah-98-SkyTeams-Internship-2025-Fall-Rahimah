// Find factorial of a number: Compute N! using iterative approach.

function factorialUptoN(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialUptoN(5)); // Output: 120
