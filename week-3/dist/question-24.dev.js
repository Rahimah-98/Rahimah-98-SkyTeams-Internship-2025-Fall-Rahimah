"use strict";

// Generate Pascal’s Triangle: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows.
function pascalTriangle(rows) {
  for (var i = 0; i < rows; i++) {
    var row = '';
    var value = 1;

    for (var j = 0; j <= i; j++) {
      row += value + ' ';
      value = value * (i - j) / (j + 1);
    }

    console.log(row);
  }
}

pascalTriangle(5); // Output:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
//# sourceMappingURL=question-24.dev.js.map
