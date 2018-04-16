function inc() {
    header.style.fontSize = '20px'; 
};

function dec() {
    header.style.fontSize = '10px'; 
};
var buttonPlus = document.getElementById("plus");
buttonPlus.onclick = inc;
var buttonMinus = document.getElementById("minus");
buttonMinus.onclick = dec;

var header = document.getElementById("test");


// function zamienKolor() {
//     this.style.color = "red";
// }
// var test = document.getElementById("test");

// test.onmouseover = zamienKolor;