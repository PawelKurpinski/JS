if (jQuery) {
    alert("git!")
} else {
    alert("coś się skiepściło!")
};
let rows = [0, 1, 2, 3, 4, 5, 6, 7];
let cols = ["A", "B", "C", "D", "E", "F", "G", "H"];

let count = 0;

function draw() {
    for (let i = 0; i < rows.length; i++) {
        for (var j = 0; j < cols.length; j++) {
            if ((((i==0 ||i%2==0) && j%2==0)) || ((i%2!=0 && j%2!=0))) {
                $("div.chessBoard").append('<div class="tile"></div>');
            } else {
                $("div.chessBoard").append('<div class="tileW"></div>');
            }
        };
        $("div.chessBoard").append('<div style="clear:both"></div>');
    };
};
draw()