"use strict";

//  calculate the sum of all digit of a number
var sumOfDigits = function sumOfDigits(num) {
  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = num.toString()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var digit = _step.value;
      sum += parseInt(digit, 10);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
};

console.log(sumOfDigits(123)); // Output: 6

console.log(sumOfDigits(4567)); // Output: 22
//# sourceMappingURL=question-21.dev.js.map
