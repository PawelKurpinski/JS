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

// function steps(n) {
//   var stars = "";
//   for (let j = 0; j < n; j++) {
//     stars += "#";
//     console.log(stars);
//   }
//   return stars;
// }
// step(2);

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

// module.exports = steps;


// function draw(n) {
//     for (let rows = 0; rows < n; rows++) {
//         var stars = '';
//         for (let cols = 0; cols < n; cols++) {
//             (cols <= rows) ? stars += "#" : stars += " ";
//             }  console.log(stars); 
//         }  
//     }; 
//     draw(4);