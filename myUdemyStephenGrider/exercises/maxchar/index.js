// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {}


const string = "Hello There!";
const chars = {};

for (const index of string) {
    console.log(index);
} 

module.exports = maxChar;
