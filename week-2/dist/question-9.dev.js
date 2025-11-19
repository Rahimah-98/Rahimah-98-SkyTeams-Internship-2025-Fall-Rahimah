"use strict";

// Grade Calculator (0–100 → A–F)
function gradeCalculator(score) {
  if (score < 0 || score > 100) {
    return 'Invalid score';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(gradeCalculator(68));
//# sourceMappingURL=question-9.dev.js.map
