// Check if a number is even, odd, or prime

function checkNum(num) {
  // even or odd
  var type = num % 2 === 0 ? 'Even' : 'Odd';

  // Prime
  var isPrime = true;
  if (num <= 1) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${num} is ${type} and prime`);
  } else {
    console.log(`${num} is ${type} and not prime`);
  }
}

checkNum(8); //Output: 8 is even and not prime
checkNum(3); //Output: 3 is odd and prime
