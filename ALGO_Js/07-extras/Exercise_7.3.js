const readlineSync = require('readline-sync');

function findDivisors(num) {
  const divisors = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
}

// Ask the user for a positive integer
const num = parseInt(readlineSync.question('Enter a positive integer: '));

// Find and display the divisors
const divisors = findDivisors(num);
if (divisors.length === 0) {
  console.log('There are no divisors for the given number.');
} else {
  console.log('Divisors:', divisors.join(' '));
}