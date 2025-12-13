// Calculate Factorial Using Recursion:  Implement factorial(n), which calculates the factorial of n using recursion.
function factorial(n) {
  return n < 0
    ? 'Factorial is not defined for negative numbers.'
    : n <= 1
    ? 1
    : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: Factorial is not defined for negative numbers.
