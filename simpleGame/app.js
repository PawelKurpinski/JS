var myNumber = 5;
var stringGuess = prompt("Guess what number am I thinking about?");
var guess = Number(stringGuess);

if (guess == myNumber) {
    alert("You got it right!");
}
else if (guess > myNumber) {
    alert("Too hight. Gusess again!")
}
else {
    alert("Too low. Gusess again!");
}
