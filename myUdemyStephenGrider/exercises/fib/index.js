// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function fibo(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            array.push(i);
        } else if (i === 1) {
            array.push(i);
        } else {
            array.push((array[i-2] + array[i-1]));
        }
    }; 
    console.log(array)
    return array;
} fibo(10);

// module.exports = fib;


// second solution--------------------------------------------------------------


function fibonacci(n) {
    if (n<2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
    fibonacci(8)