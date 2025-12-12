"use strict";

// Generate all prime numbers up to N: List all prime numbers up to a given limit using a loop.
function allPrimesN(n) {
  var primes = [];

  for (var num = 2; num <= n; num++) {
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
  }

  return primes;
}

console.log(allPrimesN(12)); // Output: [2, 3, 5, 7, 11]

console.log(allPrimesN(10)); // Output: [2, 3, 5, 7]

console.log(allPrimesN(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
//# sourceMappingURL=question-11.dev.js.map
