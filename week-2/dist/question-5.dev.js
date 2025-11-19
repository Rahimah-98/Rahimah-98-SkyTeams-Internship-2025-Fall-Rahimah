"use strict";

// 5. Compute Simple and Compound Interest
function simpleAndCompoundInterest(p, r, t) {
  var smpInt = p * r * t / 100;
  var comInt = p * (Math.pow(1 + r / 100, t) - 1);
  console.log("Simple Interest: ".concat(smpInt, "\nCompound Interest: ").concat(comInt));
}

simpleAndCompoundInterest(1000, 5, 2);
//# sourceMappingURL=question-5.dev.js.map
