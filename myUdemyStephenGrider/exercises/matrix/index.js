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
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/* another important thing! I can asign a value to an empty array without pushing anything! for example:
cosnt arr = [];
arr[3] = "Wow!"
console.log(arr[3]) => "Wow!"
*/

/* 1 2 3
   8 9 4
   7 6 5 */

function drawTables(n) {

  const table = [];

  for (let i = 0; i < n; i++) {
    table.push([]);
  }

  let startY = 0;
  let startX = 0;
  let endX = n - 1;
  let endY = n - 1;
  let counter = 1;

  while (startX <= endX && startY <= endY) {
    for (let i = startX; i <= endX; i++) {
      table[startY][i] = counter;
      counter++;
    }
    startY++;

    for (let i = startY; i <= endY; i++) {
      table[i][endX] = counter;
      counter++;
    }
    endX--;

    for (let i = endX; i >= startX; i--) {
      table[endY][i] = counter;
      counter++;
    }
    endY--;

    for (let i = endY; i >= startY; i--) {
      table[i][startX] = counter;
      counter++;
    }
    startX++;
  }
  console.log(table);
  return table;
}
drawTables(3);

// function matrix(n) {
//     // 1. create an empty array results
//     // 2. push into it "n" subarrays
//     const results = [];
//     for (let i = 0; i < n; i++) {
//         results.push([]);
//     }
//     // 3. cearte a counter variable starting at 1
//     let counter = 1; /* this is the value that we will increment to have in our arrays */
//     // 4. create a number of variables that keep track of the current column
//     let startColumn = 0;
//     let endColumn = n - 1;
//     /* these all ensd and start are not fixed values! */
//     let startRow = 0;
//     let endRow = n - 1;
//     // 5. make sure that we are going to execute the rest of the code as long as the statement is true - the best here will be the while loop
//     while (startColumn <= endColumn && startRow <= endRow) {
//         // 6. first for loop will be responsible for the top ROW [1, 2, 3] of our solution. notation [x][y] is asigining values to the inner arrays; here we have results[startRow][i] = counter but it's the same mechanism;
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter++;
//         };
//         startRow++;
//         /* changing the row for the next one */
//         //  7. the second "for loop" will be responsible for the column on the right hand side.(from row 1 to 2 on the right hand side in END column! number: 4 and 5)
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++;
//         }
//         endColumn--;
//         // 8. third loop will be responsible for the elements on the bootom-left values 6 and 7 and we're substracting the column
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;
//         // 9. the last - for loop will add values at  the left hand side 8
//         for (let i = endRow; i >= startRow; i--) {
//             results[i][startColumn] = counter;
//             counter++;
//         }
//         startColumn++;
//         //10. The last value - the biggest one will add the second cycle of the while lopp. We are incrementing the column. In this case with 3 by 3 we will have all the values = 1;
//     }
//     console.log(results);
//     return results;
// }
// matrix(6);

// module.exports = matrix;


var x = 0; /* these are the start values */
var y = 0;

function spiralMatrix(par) {
  var matrixSpiral = new Array(par);
  for (var i = 0; i < par; i++) {
    matrixSpiral[i] = new Array(par);
  }
  var movementDirection = "right"; // right, down, left, up - y++, x++, y--, x--
  /* this is the premiss at the beginning - we start with the right movement */

  for (var k = 1; k <= par * par; k++) {
    matrixSpiral[x][y] = k; /* here we start with the 0 and 0 coordinates with a value equal to 1 */
    if (
      movementDirection == "right" && (y + 1 >= matrixSpiral.length || matrixSpiral[x][y + 1] != undefined)) {
      movementDirection = "down";
    } else if (
      movementDirection == "down" && (x + 1 >= matrixSpiral.length || matrixSpiral[x + 1][y] != undefined)) {
      movementDirection = "left";
    } else if (
      movementDirection == "left" && (y - 1 < 0 || matrixSpiral[x][y - 1] != undefined)) {
      movementDirection = "up";
    } else if (
      movementDirection == "up" && (x - 1 < 0 || matrixSpiral[x - 1][y] != undefined)) {
      movementDirection = "right";
    }
    makeMovement(movementDirection);
  }
  return matrixSpiral;
}

function makeMovement(movementDirection) {
  if (movementDirection == "right") {
    y++;
  } else if (movementDirection == "down") {
    x++;
  } else if (movementDirection == "left") {
    y--;
  } else if (movementDirection == "up") {
    x--;
  }
}

console.log(spiralMatrix(4));