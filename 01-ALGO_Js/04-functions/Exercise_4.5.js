/**
 * Calculates the distance between two points A and B in a 2D space.
 * @param {number[]} pointA - The coordinates of point A as an array [x, y].
 * @param {number[]} pointB - The coordinates of point B as an array [x, y].
 * @returns {number} The distance between point A and point B.
 */

function calcDistance(pointA, pointB){
    let [x1, y1] = pointA;
    let [x2, y2] = pointB;

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance.toFixed(2)
}

// Example usage of calcDistance function

const pointA = [1, 1];
const pointB = [2, 2];
const distance1 = calcDistance(pointA, pointB);
console.log(`Distance between point A and point B: ${distance1}`);