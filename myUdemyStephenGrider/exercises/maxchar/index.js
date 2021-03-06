// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {}

// ---------------------------------------------------- ---- ---- --- 

const str = "Helo There!";
const objectOfLetters = {};

for (const i of str) {
    (!objectOfLetters[i]) ? objectOfLetters[i] = 1: objectOfLetters[i]++; /* shorthand of "if" statement */
    console.log(i); /* chars[i]=1 always but i = "H" than "e" ect */
    console.log(objectOfLetters[i]);
}

// -----------------------------------------------------------------------------------------------
// I. checking if given letter can we see for the first time or not (!objectOfLetters[i]) 
// II. adding to object new pairs of elements. 
// The clue is notation: objectWithLetters[letter] === objectWithLetters["letters"] 
// becauce "letter" is already a string but at the same time a variable witch is changing with every loop. 
// It would not work with ["letter"] notation. 

function maxNumberOfLetters(string) {
    const objectWithLetters = {}; /* this is an empty object */
    for (let letter of string) {
        (objectWithLetters[letter]) ? objectWithLetters[letter]++: objectWithLetters[letter] = 1;
        /* here we are creating the inside of the object with "1" or incrementing its value */
    }
    console.log(objectWithLetters);

    // -----------------------------------------------

    let maxNumberOfOccurrences = 0;
    let maxChar = '';

    // here below letterOfMaxOccurences is a letter and a key od the objects!
    for (const letterOfMaxOccurences in objectWithLetters) {

        if (objectWithLetters[letterOfMaxOccurences] > maxNumberOfOccurrences) {
            objectWithLetters[letterOfMaxOccurences] = maxNumberOfOccurrences;
            maxChar = letterOfMaxOccurences;
        }
    }
    console.log(maxChar);
    return maxChar;
};
maxNumberOfLetters("Heeeello!");



// function ileRazysiePowtarza(wyraz) {
    
//     var obiekt = {};
    
//     for (const litera of wyraz) {
//         (obiekt[litera]) ? obiekt[litera]++ : obiekt[litera] = 1;
//     };
//     console.log(obiekt);
    

//     let liczbawystpien = 0;
//     let literaLiczbyWystapien = '';

//     for (const litera in obiekt) {
//         if (obiekt[litera] > liczbawystpien){
//            liczbawystpien = obiekt[litera];
//             literaLiczbyWystapien = litera;
//         }
//     } console.log(literaLiczbyWystapien);
     
//     return literaLiczbyWystapien;

// } ileRazysiePowtarza("oooillllee");



// module.exports = maxChar;

function maxValue(string) {
    let obiekcik = {};
    for (const litera of string) {
        (obiekcik[litera])? obiekcik[litera]++ : obiekcik[litera]++;
    } return obiekcik;
}