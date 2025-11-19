"use strict";

function convertTime(ts) {
  // Calculate hours
  var h = Math.floor(ts / 3600); // Remaining seconds after hours

  var remainingSeconds = ts - h * 3600; // Calculate minutes

  var m = Math.floor(remainingSeconds / 60); // Remaining seconds after minutes

  var s = remainingSeconds - m * 60;
  console.log("Hours: ".concat(h, ", Minutes: ").concat(m, ", Seconds: ").concat(s));
}

convertTime(3700); // Hours: 1, Minutes: 1, Seconds: 40
//# sourceMappingURL=question-6.dev.js.map
