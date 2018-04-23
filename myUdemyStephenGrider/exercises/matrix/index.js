// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* another important thing! I can asign a value to an empty array without pushing anything! for example:
cosnt arr = [];
arr[3] = "Wow!"
console.log(arr[3]) => "Wow!"
*/

function matrix(n) {
// 1. create an empty array results
// 2. push into it "n" subarrays
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    } 
    
}; matrix(3);

// module.exports = matrix;


