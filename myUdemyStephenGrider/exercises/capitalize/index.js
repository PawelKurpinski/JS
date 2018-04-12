// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];

    // So what are we going to do?! We want to:
    // split our words into an array (words) but we do not want to separate letters than just words to take from them first letters!
    // than we will change their first letters with toUpperCase method
    // and also we have to add rests of the words with slice(1) what means take the second letter and the rest of the word;

    for (const oneWord of str.split(' ')) { /* we need this split method to separate words and to choose first letters of them! */
        words.push(oneWord[0].toUpperCase() + oneWord.slice(1));
        console.log(words);
    }
    console.log(words.join(' '));
}; 
capitalize("ala ma kota");

/* This is what we get! :
["Ala"]
index.js:21 (2) ["Ala", "Ma"]
index.js:21 (3) ["Ala", "Ma", "Kota"]
index.js:23 Ala Ma Kota */

// module.exports = capitalize;
