const readlineSync = require("readline-sync");

let firstName = readlineSync.question('Enter your first name pls');
console.log("Hello " + firstName);