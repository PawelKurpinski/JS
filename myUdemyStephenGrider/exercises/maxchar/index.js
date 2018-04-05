// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {}


const str = "Helo There!";
const objectOfLetters = {};

for (const i of str) {
    (!objectOfLetters[i]) ? objectOfLetters[i] = 1 : objectOfLetters[i]++; /* shorthand of "if" statement */
    console.log(i);  /* chars[i]=1 always but i = "H" than "e" ect */
    console.log(objectOfLetters[i]);
} 

const string = "Heeeello!";

// function maxNumberOfLetters(string) {
    const objectOfLetters = {};

    for (let letter of string) {
        objectOfLetters[letter] ? objectOfLetters++ : objectOfLetters[letter] = 1;
    } 
// } maxNumberOfLetters("abccccddede");



let maxnumberOfOccurrences = 0;
let maxChar = '';

for (const maxIndex in objectOfLetters) {
    if (objectOfLetters[maxIndex] > max) {
        max = objectOfLetters [maxIndex];
        maxLetter = maxIndex;
    }
}




module.exports = maxChar;
