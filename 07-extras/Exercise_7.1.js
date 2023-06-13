const readlineSync = require('readline-sync');

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess = 0;

while (true) {
  guess = parseInt(readlineSync.question('Guess the number: '));

  if (guess < randomNumber) {
    console.log('Too low');
  } else if (guess > randomNumber) {
    console.log('Too high');
  } else {
    console.log('Well guessed');
    break;
  }
}