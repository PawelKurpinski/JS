// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// console.log( "'" + "#"+' '+" '");


function steps(n) {
    for (let i = 0; i < n; i++) {
        var stars = "'";
        for (let j = 0; j <= n; j++) {
            if (j <= i) {
                stars += "#";
            } else if (j < n) {
                stars += " ";
            } else if (j=n) {
                stars += "'"
            }
        } console.log(stars);
    } 
};
steps(3);

// module.exports = steps;