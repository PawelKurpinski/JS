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
    (!objectOfLetters[i]) ? objectOfLetters[i] = 1: objectOfLetters[i]++; /* shorthand of "if" statement */
    console.log(i); /* chars[i]=1 always but i = "H" than "e" ect */
    console.log(objectOfLetters[i]);
}

// -----------------------------------------------------------------------------------------------
// here we are creating (not checking something in a finished object) an object and checking if given letter we can see for the first time or not. Thr clue is that notation: objectWithLetters[letter] === objectWithLetters["letters"] becauce "letter" is already a string but at the same time a variable witch is changing with every loop. It would not work with ["letter"] notation. 

function maxNumberOfLetters(string) {
    const objectWithLetters = {};
    for (let letter of string) {
        (objectWithLetters[letter]) ? objectWithLetters[letter]++: objectWithLetters[letter] = 1;
    }
    console.log(objectWithLetters);

// ----------------------------------

    let maxNumberOfOccurrences = 0;
    let maxChar = '';

// here below letterOfMaxOccurences is a letter and a key od the objects!
    for (const letterOfMaxOccurences in objectWithLetters) {
        
        if (objectWithLetters[letterOfMaxOccurences] > maxNumberOfOccurrences) {
            maxNumberOfOccurrences = objectWithLetters[letterOfMaxOccurences];
            maxChar = letterOfMaxOccurences;
        }
    }
    return maxChar;
};
maxNumberOfLetters("Heeeello!");







// module.exports = maxChar;