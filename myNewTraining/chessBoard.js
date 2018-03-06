if (jQuery) {
    alert("git!")
} else {
    alert("coś się skiepściło!")
};
var rows = [0, 1, 2, 3, 4, 5, 6, 7];
var cols = ["A", "B", "C", "D", "E", "F", "G", "H"];

// function draw() {
//     for (let i = 0; i < rows.length; i++) {
//         for (var j = 0; j < cols.length; j++) {
//             if ((((i==0 ||i%2==0) && j%2==0)) || ((i%2!=0 && j%2!=0))) {
//                 $("div.chessBoard").append('<div class="tile"></div>');
//             } else {
//                 $("div.chessBoard").append('<div class="tileW"></div>');
//             }
//         };
//         $("div.chessBoard").append('<div style="clear:both"></div>');
//     };
// };
// draw()


var clickEvent = function () {
    $(".tile, .tileW").click(function () {
        var $clikedFiled = $(this);
        var dataI = parseInt($clikedFiled.attr("data-i"));
        var dataJ = parseInt($clikedFiled.attr("data-j"));
        
        alert("To pole o wpółrzędnych "+ dataJ + ', ' + dataI);
    })
}


function draw() {
    for (let i = 0; i < rows.length; i++) {
        for (var j = 0; j < cols.length; j++) {
            if ((((i==0 ||i%2==0) && j%2==0)) || ((i%2!=0 && j%2!=0))) {
                var field = $("<div.chessBoard>").addClass("tile").html([i][j]).attr("data-i", i).attr("data-j", j);
                $("div.chessBoard").append(field);
            } else {
                var fieldTwo = $("<div.chessBoard>").addClass("tileW").html([i][j]).attr("data-i", i).attr("data-j", j);
                $("div.chessBoard.chessBoard").append(fieldTwo);
            }
        };
        $("div.chessBoard").append('<div style="clear:both"></div>');
    };
    clickEvent();
};
draw()