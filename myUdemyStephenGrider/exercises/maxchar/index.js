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

// -----------------------------------------------------------------------------------------------

function maxNumberOfLetters(string) {
    const objectWithLetters = {};

    for (let letter of string) {
        (objectWithLetters[letter]) ? objectWithLetters[letter]++ : objectWithLetters[letter] = 1;

                
    } console.log(objectWithLetters);
    
    
    let maxNumberOfOccurrences = 0;
    let maxChar = '';
    

    for (const letterOfMaxOccurences in objectWithLetters) {
        
        if (objectWithLetters[letterOfMaxOccurences] > maxNumberOfOccurrences) {
            maxNumberOfOccurrences = objectWithLetters[letterOfMaxOccurences];
            maxChar = letterOfMaxOccurences;
        } 
    } 
    return maxChar;
}; maxNumberOfLetters("Heeeello!");







// module.exports = maxChar;
