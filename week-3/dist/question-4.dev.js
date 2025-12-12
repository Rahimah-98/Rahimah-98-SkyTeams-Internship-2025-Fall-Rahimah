"use strict";

//  Display all factors of a number: Print all numbers that divide the given number exactly.
function displayFactors(num) {
  var factors = [];

  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
}

console.log(displayFactors(12)); // Output: [ 1, 2, 3, 4, 6, 12 ]

console.log(displayFactors(15)); // Output: [ 1, 3, 5, 15 ]
//# sourceMappingURL=question-4.dev.js.map
