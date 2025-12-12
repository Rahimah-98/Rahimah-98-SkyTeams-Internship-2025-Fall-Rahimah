//  Check for palindrome number: Check if a number reads the same backward and forward.

function isPalindromeNumber(num) {
  num = num.toString();
  const reversedNum = num.split('').reverse().join('');
  return num === reversedNum ? 'Plaindrome' : 'Non-Plaindrome';
}

console.log(isPalindromeNumber(121)); // Output: "Plaindrome"
console.log(isPalindromeNumber(123)); // Output: "Non-Plaindrome"
console.log(isPalindromeNumber(10)); // Output: "Non-Plaindrome"
