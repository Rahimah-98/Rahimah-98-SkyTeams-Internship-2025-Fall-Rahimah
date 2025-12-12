"use strict";

// Check whether a number is prime:  Determine if a number is divisible only by 1 and itself
function isPrime(num) {
  if (num >= 1) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
}

console.log(isPrime(7)); // true

console.log(isPrime(10)); // false
//# sourceMappingURL=question-10.dev.js.map
