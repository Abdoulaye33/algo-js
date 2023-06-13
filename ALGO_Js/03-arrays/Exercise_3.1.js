const array1 = [1, 2, 3, 4, 5];
const array2 = [100, 101, 102];

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < array1.length; i++) {
  sum1 += array1[i];
}

for (let i = 0; i < array2.length; i++) {
  sum2 += array2[i];
}

console.log("Sum of array1:", sum1);
console.log("Sum of array2:", sum2);