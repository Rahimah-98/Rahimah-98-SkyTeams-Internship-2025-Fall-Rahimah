"use strict";

// Pattern Printing – Right-aligned Triangle
function printTriangle(n) {
  for (var i = 1; i <= n; i++) {
    var row = '';

    for (var j = 1; j <= n - i; j++) {
      row += '  ';
    }

    for (var k = 1; k <= i; k++) {
      row += '* ';
    }

    console.log(row);
  }
}

printTriangle(5); // Output:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//# sourceMappingURL=question-18.dev.js.map
