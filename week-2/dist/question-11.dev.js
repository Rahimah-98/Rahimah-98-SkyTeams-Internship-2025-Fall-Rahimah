"use strict";

// Simple Calculator using switch-case
function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    case '/':
      return a / b;

    case '%':
      return a % b;

    default:
      return 'Invalid operator';
  }
} // Example:


console.log(calculator(10, 5, '+')); // 15

console.log(calculator(10, 5, '*')); // 50

console.log(calculator(10, 5, '/')); // 2
//# sourceMappingURL=question-11.dev.js.map
