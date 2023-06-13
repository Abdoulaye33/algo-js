const readlineSync = require("readline-sync")

let firstDecimal = readlineSync.question('Can you give me a decimal number please ?')
let secondDecimal = readlineSync.question('Can you give me a second decimal number please ?')

console.log("Multiplication result : " + Math.round(firstDecimal) * secondDecimal)