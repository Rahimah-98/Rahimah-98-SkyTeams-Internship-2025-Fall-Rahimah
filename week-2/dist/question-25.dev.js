"use strict";

// Find LCM of two numbers:Compute least common multiple using the relationship: LCM(a, b) = (a × b) / GCD(a, b)
function gcd(a, b) {
  while (a !== b) {
    a > b ? a = a - b : b = b - a;
  }

  return a; // or return b; since a === b
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

console.log(lcm(12, 18)); // Output: 36

console.log(lcm(5, 10)); // Output: 10
//# sourceMappingURL=question-25.dev.js.map
