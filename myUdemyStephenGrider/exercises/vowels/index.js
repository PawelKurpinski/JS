// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var vowelCounter = 0;
    for (const letter of str) {
        if (letter === "a"||"e"||"i"||"o"||"u") {
            vowelCounter += 1;
        }
    } console.log(vowelCounter);  
} vowels("Hi There!");

// module.exports = vowels;
