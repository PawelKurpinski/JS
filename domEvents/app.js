var button = document.querySelector("button");
var isRed = false;

button.addEventListener("click",function(){
        if (isRed) {
            document.body.style.background = "white";
            isRed = false;
        } else {
            document.body.style.background = "red";
            isRed = true;
        }
});
// alternatywnie i krócej na końcu zamiast isRed = true i false wyżej
// dać isRed = !isRed;
// najkrócej stworzyć klasę w znaczniku style w html a w js classList.toggle


var button = document.querySelector("button");

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});
