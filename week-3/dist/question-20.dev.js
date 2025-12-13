"use strict";

// Body Mass Index (BMI) Calculator: Given weight (kg) and height (m), calculate BMI using
function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);

  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal weight';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obesity';
  }
}

console.log(bmiCalculator(24, 1.8)); // Output: 'Underweight'
//# sourceMappingURL=question-20.dev.js.map
