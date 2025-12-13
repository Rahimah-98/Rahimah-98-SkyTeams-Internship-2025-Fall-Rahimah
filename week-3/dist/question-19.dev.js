"use strict";

//  Pattern Printing – Pyramid
function printPyramid(n) {
  for (var i = 1; i <= n; i++) {
    var spaces = ' '.repeat(n - i);
    var stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printPyramid(5); // Output:
//     *
//    ***
//   *****
//  *******
// *********
//# sourceMappingURL=question-19.dev.js.map
