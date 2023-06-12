/**
 * Calculates the average of an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The average of the numbers in the array.
*/

function average(arr){
    if(arr.length === 0)
        return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

/**
 * Finds the minimum element in an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The minimum element in the array.
 */
function min(arr){
    if (arr.length === 0)
        return undefined;
    return Math.min(...arr);
}

/**
 * Finds the maximum element in an array of numbers.
 * @param {number[]} arr - An array of numbers.
 * @returns {number} The maximum element in the array.
 */
function max(arr){
    if (arr.length === 0)
        return undefined;
    return Math.max(...arr);
}

/**
 * Generates an array of n random numbers between 1 and 10 (inclusive).
 * @param {number} n - The number of random numbers to generate.
 * @returns {number[]} An array of n random numbers between 1 and 10.
 */

function multiRand(n){
    const result = [];
    for (let i = 0; i < n; i++){
        result.push(Math.floor(Math.random() * 10) + 1);
    }
    return result;
}


const readlineSync = require('readline-sync');
let n = readlineSync.questionInt('Enter the number of random numbers to generate: ');
let randomNumbers = multiRand(n);

let avg = average(randomNumbers);

let minimum = min(randomNumbers);
let maximum = max(randomNumbers);
console.log('Random numbers:', randomNumbers);
console.log('Average:', avg);
console.log('Minimum:', minimum);
console.log('Maximum:', maximum);