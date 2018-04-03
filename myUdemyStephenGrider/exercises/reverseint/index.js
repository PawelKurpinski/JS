// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

const n = 12345;

function reverseNumber(number) {
   return Array.from(n.toString()).map(Number).reverse;
} reverseNumber();

// ----------------------------------------------------------------
function reverseNumberTwo(numb) {
    let score = 0;
    score = parseInt(numb.toString().split('').reverse().join(''));
    if (Math.sign(score) < 0) {
        return score;
     } return score *-1;
} reverseNumberTwo(-12345);

// or like this! it's very cool because we do not need to use if statement! The clue is that we use multiplication of Math.sign of "n" which can be positive and negative

function reverseNumberTwo(n) {
    const reversed = n
    .toString() /* zmiana na strig */
    .split('') /* zmiana na tablicę */
    .reverse() /* odwrócenie kolejności tablicy */
    .join(''); /* zmiana na string */

    return parseInt(reversed) * Math.sign(n);  /* parse zmienia string na liczbę a Math.sign sprawdza znak */  
} reverseNumberTwo(-12345);

module.exports = reverseInt;


