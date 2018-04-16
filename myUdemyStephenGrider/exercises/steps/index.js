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

<<<<<<< HEAD
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
steps(4);
=======
// function steps(n) {
//   var stars = "";
//   for (let j = 0; j < n; j++) {
//     stars += "#";
//     console.log(stars);
//   }
//   return stars;
// }
// stepddddsddddddddddddddd(2);

function stepsTwo(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}
stepsTwo(4);
>>>>>>> 463ea63b930feacd077722a2a88eb3b13f22b2b7

// module.exports = steps;
