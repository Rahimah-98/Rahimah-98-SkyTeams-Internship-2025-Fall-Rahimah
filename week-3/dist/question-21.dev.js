"use strict";

//  Password Strength Checker - A strong password must:
// • Be at least 8 characters long.
// • Contain at least one uppercase letter, one lowercase letter, and one number.
function passwordStrengthChecker(password) {
  var hasUppercase = /[A-Z]/.test(password);
  var hasLowercase = /[a-z]/.test(password);
  var hasNumber = /[0-9]/.test(password);

  if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber) {
    return 'Strong password';
  }

  return 'Weak password';
}

console.log(passwordStrengthChecker('Password123')); // Output: 'Strong password'

console.log(passwordStrengthChecker('pass')); // Output: 'Weak password'
//# sourceMappingURL=question-21.dev.js.map
