const readlineSync = require('readline-sync');
function generateFibonacciNumbers(n){
    const fibonacciNumbers = [0, 1];

    if( n <= 2){ return fibonacciNumbers.slice(0, n)}
    for (let i = 2; i < n; i++){
        let nextNumber = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
        fibonacciNumbers.push(nextNumber);
    }
    return fibonacciNumbers;
}
const n = parseInt(readlineSync.question('Enter the number of Fibonacci numbers to generate: '));

const fibonacciNumbers = generateFibonacciNumbers(n);
console.log('Fibonacci numbers:', fibonacciNumbers);