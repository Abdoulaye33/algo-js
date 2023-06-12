const readlineSync = require('readline-sync');

/**
 * Generates a random integer between 1 and 10 (inclusive).
 * @returns {number} A random integer between 1 and 10.
 */
function rand10() {
    return Math.floor(Math.random()* 10) + 1;
}

const Aléat = rand10();

console.log('chiffres Aléatoire: ', Aléat);