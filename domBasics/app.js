var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
    if (isBlue){
        body.style.background = "blue";
    } else {
        body.style.background = "green";
    }isBlue = !isBlue;
}, 1000)
