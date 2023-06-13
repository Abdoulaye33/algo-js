const readlineSync = require("readline-sync")

let i = parseInt(readlineSync.question('your favorite number ?'))

while ( i != 42) {
    i = parseInt(readlineSync.question('are you sure ?'))
}

console.log("that's good ma boy !")