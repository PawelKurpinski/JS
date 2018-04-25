// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let mid = Math.floor((2*n - 1)/2);
   
//     for (let row = 0; row < n ; row++) {
//         let level = '';

//         for (let col = 0; col < 2*n - 1; col++) {
//             if (mid - row <= col && mid + row >= col){
//                 level += "#";
//             } else {
//                 level += ' ';
//             } 
//         } console.log(level);    
//     }
// }
// pyramid(3);


// second solution----------------------------

function christmasTree(par) {
    var emptySpaces = par;
    var howManyStars = 1;
    for (var x = 1; x <= par; x++) {
        var mark = '';
        for (var y = 1; y <= emptySpaces; y++) {              
            mark += " ";
            if (y == emptySpaces) {
                for (var z = 1; z <= howManyStars; z++) { 
                mark += "*"
                }
            }
        }
        emptySpaces--;
        howManyStars += 2;
        console.log(mark)
    }
}
christmasTree(3)


function tree(n) {
    let emptyS = n;
    let howManyS = 1;
    for (let i = 1; i <= n ; i++) {
       let marks = '';
        for (let j = 1; j <= emptyS; j++) {
            marks += " ";
            if (j === emptyS) {
                for (let k = 1; k <= howManyS; k++) {
                marks += "*";    
                }
            }
        }
        emptyS--;
        howManyS += 2;
        console.log(marks);
    }
};
tree(3);

function choinka(n) {
    let pusteMiejsca = n;
    let ileGwiazdek = 1;
    for (let i = 1; i <= n; i++) {
        let znaki = '';
        for (let j = 1; j <= pusteMiejsca; j++) {
            znaki += " ";
            if (j === pusteMiejsca) {
                for (let k = 1; k <= ileGwiazdek; k++) {
                znaki += "*";    
                }
            }           
        }
        pusteMiejsca--;
        ileGwiazdek += 2;
        console.log(znaki);
    }
}; choinka(3);
