const readlineSync = require("readline-sync")

let age = readlineSync.question('Can you give me your age please ? ')

if (age >= 18) console.log("Your are an adult")
else console.log("Your are not yet an adult")