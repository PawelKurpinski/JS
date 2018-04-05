// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {}


const string = "Helo There!";
const objectOfLetters = {};

for (const i of string) {
    (!objectOfLetters[i]) ? objectOfLetters[i] = 1 : objectOfLetters[i]++; /* shorthand of "if" statement */
    console.log(i);  /* chars[i]=1 always but i = "H" than "e" ect */
    console.log(objectOfLetters[i]);
} 
function maxPeriodicity() {
    
}




module.exports = maxChar;
