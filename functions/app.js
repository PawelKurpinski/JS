// function sayHi(){
//     console.log("HELLO!");
//     console.log("GOODBY!");
// }
// sayHi();
// ///////////////////////////
// function sayHello(name){
//     console.log("Hello there"
// + "my dear "+ name "!");
// }
// sayHello(Julia);
//
// ///////////////////////////
//
// function square (x){
//     console.log(x*x);
// }
// square(4);
//
// /////////////////////
//
// function square (x){
//     return x*x;
// }
// square(4);
//
// ///////////////

// alert("check!");
//
// function factorial(num){
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     } return result;
// }
//
// ///////////////////////////////

var numbers = [1,2,3,4,5,6,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];
numbers.forEach(function(color){
if(color% 3 === 0) {
console.log(color);
}
});
