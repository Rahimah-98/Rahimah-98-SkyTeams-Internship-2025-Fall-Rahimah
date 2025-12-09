"use strict";

// 1. Count vowels in a string: Count the number of vowels (a, e, i, o, u) in a given string
function countvowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str.toLowerCase()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;
      vowels.includes(_char) ? count++ : null;
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

  return count;
}

console.log(countvowels('SkyTeams Internship')); // Output: 5

console.log(countvowels('Hello World')); // Output: 3

console.log(countvowels('Rahimah Ansari')); // Output: 6
//# sourceMappingURL=question-1.dev.js.map
