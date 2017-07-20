var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.querySelector("#reset");
var span1 = document.querySelector("#span1");
var span2 = document.querySelector("#span2");
var input = document.querySelector("input");
var gameTarget = document.querySelector ("p span");
var p1Score = 0;
var p2Score = 0;
var maxScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === maxScore) {
            span1.classList.add("winner");
            gameOver = true;
        }
        span1.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if (!gameOver){
        p2Score++;
        if (p2Score === maxScore) {
            span2.classList.add("winner");
            gameOver = true;
        }
        span2.textContent = p2Score;
    }

});

resetButton.addEventListener("click", function(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    span1.textContent = p1Score;
    span2.textContent = p2Score;
    span1.classList.remove("winner");
    span2.classList.remove("winner");
})

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    span1.textContent = p1Score;
    span2.textContent = p2Score;
    span1.classList.remove("winner");
    span2.classList.remove("winner");
};
input.addEventListener("change", function(){
    gameTarget.textContent = this.value;
    // insted of using input all the time we can take "this"
    maxScore = Number(this.value);
    reset();
})
