if (jQuery) {
    alert("git!")
} else {
    alert("coś się skiepściło!")
};
var rows = [0, 1, 2, 3, 4, 5, 6, 7];
var cols = ["A", "B", "C", "D", "E", "F", "G", "H"];



var addClickEvents = function () {
    $(".blackTile, .whiteTile").click(function () {
        var $clickedField = $(this);
        var dataI = parseInt($clickedField.attr("data-i"));
        var dataJ = parseInt($clickedField.attr("data-j"));
        
        alert("To pole o wpółrzędnych "+ dataJ + ', ' + dataI);
    })
}


function drawChessBoard() {
    var flag = -1;
    for (let i = 0; i < rows.length; i++) {
        for (var j = 0; j < cols.length; j++) {
            var c = "";
            if (flag == -1) {
                c="blackTile";
            } else {
                c="whiteTile";
            }
            var field = $("<div>").addClass(c).html([i][j]).attr("data-i", i).attr("data-j", j);
            $("div.chessBoard").append(field);
                    // if (i == 0 && j==0) {
                    //     var newD = $("<div>").innerHTML="<span style='font-size:2px, z-index=0'>John Doe</span>";
                    //     $("div.chessBoard").append(newD);
                    // }
            flag *= -1;        
        };
        $("div.chessBoard").append('<div style="clear:both"></div>');
        flag *= -1;
    };
    addClickEvents();
};
drawChessBoard()

// my first version
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



// after code revier with Radek

// function drawChessBoard() {
//         for (let i = 0; i < rows.length; i++) {
//             for (var j = 0; j < cols.length; j++) {
//                 var c = "";
//                 if ((((i==0 ||i%2==0) && j%2==0)) || ((i%2!=0 && j%2!=0))) {
//                     c="blackTile";
//                 } else {
//                     c="whiteTile";
//                 }
//                 var field = $("<div>").addClass(c).html([i][j]).attr("data-i", i).attr("data-j", j);
//                 $("div.chessBoard").append(field);
//             };
//             $("div.chessBoard").append('<div style="clear:both"></div>');
//         };
//         addClickEvents();
// };
// drawChessBoard()