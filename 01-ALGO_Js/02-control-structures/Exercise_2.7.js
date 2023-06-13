const readlineSync = require("readline-sync")

let n = parseInt(readlineSync.question('Enter a number => '))
let sum = 0;

for (let i = 0; i < n; i++) {
	const num = parseInt(readlineSync.question('Enter a number => '))
	sum += num
}
console.log("Sum of the number = " + sum)