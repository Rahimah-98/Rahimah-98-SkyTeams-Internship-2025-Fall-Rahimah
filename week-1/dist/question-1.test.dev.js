"use strict";

function testSwap() {
  var a = 5;
  var b = 6;
  var temp = a;
  a = b;
  b = temp;

  if (a === 6 && b === 5) {
    console.log('Test Passed');
  } else {
    console.log('Test Failed');
  }
}

testSwap();
//# sourceMappingURL=question-1.test.dev.js.map
