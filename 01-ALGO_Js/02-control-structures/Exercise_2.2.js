const readlineSync = require("readline-sync")

let minAge = parseInt(readlineSync.question('Can you give me a min age please ? '))
let currentAge = parseInt(readlineSync.question('Can you give me your current age please ? '))
let maxAge = parseInt(readlineSync.question('Can you give me a max age please ? '))

if (minAge > maxAge) { 
	console.log("You aren't understanding the exercice, stupid of you !")
	return false
}

if (currentAge > minAge && currentAge < maxAge) {
	console.log("The current age is between the min and max one")
	return true
}