"use strict";

//  Pattern Printing – Right-angled Triangle
function printTriangle(n) {
  for (var i = 0; i <= n; i++) {
    var row = '';

    for (var j = 0; j < i; j++) {
      row += '* ';
    }

    console.log(row);
  }
}

printTriangle(5); // Output:
// *
// * *
// * * *
// * * * *
// * * * * *
//# sourceMappingURL=question-17.dev.js.map
