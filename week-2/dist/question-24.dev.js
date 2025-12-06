"use strict";

// Find GCD of two numbers: Compute the greatest common divisor using repeated subtraction or the Euclidean algorithm
function gcd(a, b) {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }

  return a; // or return b, since a === b
}

console.log(gcd(12, 18)); // Output: 6

console.log(gcd(6, 9)); // Output: 3
//# sourceMappingURL=question-24.dev.js.map
