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
