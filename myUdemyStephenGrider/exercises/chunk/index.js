// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  var chunked = []; /* new array holging all the new chunks of data */
  for (let element of array) {
    const last =
      chunked[
        chunked.length - 1
      ]; /* last it's the last element in the new array chunked */

    if (!last || last.length === size) {
      /*!last = if last does not exist OR it's length is equal to the size parameter */
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunk;
}

// module.exports = chunk;
