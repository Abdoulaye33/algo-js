const readlineSync = require('readline-sync');

/**
 * Calculates the surface of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The surface of the rectangle.
 */

function calcSurface(length, width) {
  return length * width;
}

const length = readlineSync.questionFloat('Enter the length of the rectangle: ');
const width = readlineSync.questionFloat('Enter the width of the rectangle: ');

const surface = calcSurface(length, width);

console.log('Ton Heure de Jeu Sur Afs:', surface);