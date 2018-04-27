// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// first solution - quite interesting

function palindrome(str) {
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}
palindrome("dom");

// second option

function palindromSecond(str) {
  return str.split("").every((char, i) => {
    /* function will be called for evry element of the array; i is index and char is a single element of the array a letter */
    return char === char[str.length - i - 1];
  });
}
palindromSecond("Saomochód");

module.exports = palindrome;
