// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// first option----------------------------------------------------

function reverseOne(str) {
    return str.split("").reverse().join(""); /* split nie zadziała bez "" a join bez nich da przecinki */
} console.log(reverse("apple"));

// second option---------------------------------------------------

let newArr = [];

function reverse(string) {
    const str = string.split("");
    for (let i = (str.length -1); i > 0; i--) {
         newArr.push(str[i]);
    } return new newArr
} console.log(reverse("apple"));

// third option-----------------------------------------------------

function reverse(str) {
    let reversed = '';
    for (let character of str){
        reversed = character + reversed;
    } return reversed;
  } reverse("apple");

module.exports = reverse;

//fourth option with something new ;) arrow function with reduce

function reverse(str) {
    return str.split('').reduce((reversed, char) => {
        return  char + reversed;
    }, '');
}; reverse ("Paweł");


// redused of reduce function ;)
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}; reverse ("Paweł");
