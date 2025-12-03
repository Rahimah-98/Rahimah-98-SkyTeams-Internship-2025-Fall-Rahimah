"use strict";

// Given three sides, determine if they form a valid triangle and if it’s equilateral, isosceles, or scalene.
var triangleType = function triangleType(a, b, c) {
  // Check for a valid triangle
  if (a + b > c || a + c > b || b + c > a) {
    if (a === b && b === c) {
      return 'Equilateral Triangle';
    } else if (a === b || b === c || a === c) {
      return 'Isosceles Triangle';
    } else {
      return 'Scalene Triangle';
    }
  } else {
    return 'Not a valid triangle';
  }
};
//# sourceMappingURL=question-15.dev.js.map
