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
    for (const letter of str.toLowerCase()) {
        if (letter === "a" || "e" || "i" || "o" || "u") {
            vowelCounter += 1;
        }
    }
    return vowelCounter;
    console.log(vowelCounter);
}
vowels("Hi There!");

// module.exports = vowels;


// second solution


function vowels(str) {
    let vowelCounter = 0;
    // const checker = "aeiou";
    const checker = ['a', 'e', 'i', 'o', 'u']
    for (const letter of str.toLowerCase()) {
        if (checker.includes(letter)) {
            vowelCounter++;
        }
    }
    return vowelCounter;
    console.log(vowelCounter);
}
vowels("Why do you ask?");

// third solution

function vowels(str) {
        const matches = str.match(/[aeiou]/gi); /* this is a regular expression;
        "g" makes sure that we don't stop at the first match that we find and "i" = "case insensitive", 
        Attention! match function will return an ARRAY or without any matches it will return NULL */
        console.log(matches);
        return matches ? matches.length : 0; 
        /* this if means - if matches variable returns somethin = true = an array - return it's length OR return ZERO  */
    };
    
vowels('Why?')


function vowels(str) {
    let vowelCounter = 0;
    // const checker = "aeiou";
    const checker = ['a', 'e', 'i', 'o', 'u']
    for (const letter of str.toLowerCase()) {
        if (checker.includes(letter)) {
            
        }
    }
    return vowelCounter;
    console.log(vowelCounter);
}
vowels("Why do you ask?");