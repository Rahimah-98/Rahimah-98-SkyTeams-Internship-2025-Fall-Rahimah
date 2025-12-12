"use strict";

// Power of a number (without built-in function): Compute a^b using repeated multiplication.
function power(base, exponent) {
  var result = 1;

  for (var i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(power(2, 5)); // Output: 32

console.log(power(2, 0)); // Output: 1
//# sourceMappingURL=question-13.dev.js.map
