"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function testSwap() {
  var outputs = [[1, 2], [2, 3], [3, 4], [4, 5]];
  outputs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        a = _ref2[0],
        b = _ref2[1];

    var _swapNums = swapNums(a, b),
        _swapNums2 = _slicedToArray(_swapNums, 2),
        newA = _swapNums2[0],
        newB = _swapNums2[1];

    console.log("swapNums(".concat(a, ", ").concat(b, ") => (").concat(newA, ", ").concat(newB, ")"));
  });
}

testSwap();
//# sourceMappingURL=question-1.test.dev.js.map
