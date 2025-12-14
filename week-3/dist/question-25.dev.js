"use strict";

// Number Guessing Game:
// Some pieces of code are copy passed from ChatGPT
// these lines
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); // end of this line.

var secretNumber = Math.floor(Math.random() * 100) + 1;

function askGuess() {
  // this line.
  rl.question('Guess a number between 1 and 100: ', function (input) {
    var guess = Number(input);

    if (guess > secretNumber) {
      console.log('Too High');
      askGuess();
    } else if (guess < secretNumber) {
      console.log('Too Low');
      askGuess();
    } else {
      console.log('Correct! You guessed the number 🎉');
      rl.close();
    }
  });
}

askGuess();
//# sourceMappingURL=question-25.dev.js.map
