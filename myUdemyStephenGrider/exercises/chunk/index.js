// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2);

/* --> [[ 1, 2], [3, 4]] */

// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  var chunked = []; /* new array holding all the new chunks of data */
  console.log(chunked);
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    /* last it's the last element in the new array chunked */
    if (!last || last.length === size) {
      /*!last = if last does not exist OR it's length is equal to the size parameter */
      chunked.push([element]);
    } else {
      last.push(element); 
      /* ATTENTION! we can use push method despite the fact that last wasn't declared as an array because:
      chunked.length = 1; chunked.length - 1 = 0 and chunked[0] is not 1 THAN [1] !!  */
    }
  }
  console.log(chunked);
  return chunked;
}
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);

// // second idea---------------------------------------------------------------------------------------------------------------

function chunkSecond(array, size) {
  const chunkedTwo = [];
  let index = 0;
  while (index < array.length) {
    chunkedTwo.push(array.slice(index, index + size));
    index += size;
    console.log(chunkedTwo);
  }
  console.log(chunkedTwo);
  return chunkedTwo;
}

chunkSecond([1, 2, 3, 4, 5], 2);
//  --> [[ 1, 2], [3, 4], [5]]

// // module.exports = chunk;



