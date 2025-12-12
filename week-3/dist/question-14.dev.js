"use strict";

// Find factorial of a number: Compute N! using iterative approach.
function factorialUptoN(n) {
  var factorial = 1;

  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorialUptoN(5)); // Output: 120
//# sourceMappingURL=question-14.dev.js.map
