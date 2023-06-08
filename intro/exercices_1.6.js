const readlineSync = require("readline-sync")

let firstInteger = readlineSync.question('Can you give me an integer number please ? ')
let secondInteger = readlineSync.question('Can you give me a second integer number please ? ')

console.log(firstInteger % secondInteger)