const readlineSync = require('readline-sync');
const size = readlineSync.questionInt('Entrez la taille du tableau : ');

const numbers = [];

for (let i = 0; i < size; i++) {
  const number = readlineSync.questionInt(`Entrez l'élément ${i + 1} : `);
  numbers.push(number);
}

let min = numbers[0];
let max = numbers[0];

// Recherche le minimum et le maximum dans le tableau
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Minimum :", min);
console.log("Maximum :", max);