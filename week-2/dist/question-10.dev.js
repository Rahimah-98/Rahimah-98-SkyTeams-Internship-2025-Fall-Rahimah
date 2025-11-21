"use strict";

// Leap Year Checker
function leapYearChecker(year) {
  return year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0 ? 'Leap Year ✔️' : 'Not a Leap Year ✖️');
}

console.log(leapYearChecker(600)); // true
//# sourceMappingURL=question-10.dev.js.map
