// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
 
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  } /* here we are comparing keys of two objects - if they are not equal -> return false */

  
  for (let char in aCharMap) {   
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  } return true;
}



function buildCharMap(str) { /* this is a helper function */
  
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) { 
  /* replace(/[^\w]/g, '') this allow us to get rid of spaces and punctation marks */
    charMap[char] = charMap[char] + 1 || 1; /* add elemenets to object charMap */
    } 
  // console.log(charMap);                                          
  return charMap;
}

anagrams('rail safety', 'fairy tales');