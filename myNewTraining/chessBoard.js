// if (jQuery) {
//     alert("git!")
// } else {
//     alert("coś się skiepściło!")
// };
var rows = [0, 1, 2, 3, 4, 5, 6, 7];
var cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
var whiteChessPieces = ["♙", "♖", "♘", "♗", "♔", "♕", "♗", "♘", "♖"];


var addClickEvents = function () {
    $(".blackTile, .whiteTile").click(function () {
        var $clickedField = $(this);
        var dataI = parseInt($clickedField.attr("data-i"));
        var dataJ = parseInt($clickedField.attr("data-j"));

        alert("To pole o wpółrzędnych " + dataJ + ', ' + dataI);
    })
}


function drawChessBoard() {
    var flag = -1;
    for (let i = 0; i < rows.length; i++) {
        for (var j = 0; j < cols.length; j++) {
            var c = "";
            if (flag == -1) {
                c = "blackTile";
            } else {
                c = "whiteTile";
            }
            var field = $("<div>").addClass(c).text("").attr("data-i", i).attr("data-j", j);
            $("div.chessBoard").append(field);
            if (i == 0) {
                for (let i = 0; i < whiteChessPieces.length; i++) {
                    let element = whiteChessPieces[j + 1];
                    field.text(element);
                };
            } else if (i == 1) {
                for (let i = 0; i < 1; i++) {
                    let element = whiteChessPieces[i];
                    field.text(element);
                };
            }
            flag *= -1; 
            // dodaję flagę czyli zmienną zainicjowaną -1
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


// var man = {
//     hair: black,
//     height: 180,
//     weigt: 100,
//     doSomething : function(){

//     }
// }



// zadanie 1

function tableMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = (arr[i] < min) ? arr[i] : min;
    }
    return min;
}


const table = [2, 810, 76, 33, 18, 1, 699, 23];
console.log(tableMin(table));



function tableMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const tab = [2, 810, 76, 33, 18, 1, 699, 23];
console.log(tableMin(tab));

// zadanie 2

var firsTable = [2, 4, 11, 5, 22, 8, 16];
var secondTable = [];

function tableOperations(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * 2 == arr[i + 1]) {
            secondTable.push(Math.pow(arr[i], 2));
        }
    }
    return secondTable;
}
tableOperations(firsTable);

console.log(secondTable);


// version two

var tableOne = [2, 4, 11, 5, 22, 8, 16];
var tableTwo = [];
var num = 0;

        // 4,16,121,64

function tableOperationold() {
    for (var j = 0; j < tableOne.length; j++) {
        for (var i = 0; i < tableOne.length; i++) {
            if (tableOne[j] * 2 == tableOne[i]) {
                num = (Math.pow(tableOne[j], 2)); 
                console.log(num);
                break;             
            } else {
                num = (tableOne[j]);
                console.log(num);
            } 
        }
        tableTwo.push(num);
        console.log(num);   
    }
    return tableTwo;
}

function tableOperation() {
    for (var j = 0; j < tableOne.length; j++) {
        num = (tableOne[j]);
        for (var i = 0; i < tableOne.length; i++) {
            if (tableOne[j] * 2 == tableOne[i]) {
                num = (Math.pow(tableOne[j], 2)); 
            }
        }
        tableTwo.push(num);
        console.log(num);   
    }
    return tableTwo;
}

    tableOperation();

    console.log("table 1: " + tableOne);
    console.log("table 2: " + tableTwo);


// const ourTable = ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Piotrek'];
// const woman = ourTable.filter(function(el) {
//     return el.charAt(el.length-1) == 'a';
// });

// console.log(woman);

const tab1 = ["Kot", "Pies", "Chomik", "Ninja", "Wiewiórka"];
console.log("liczba elementów w tabeli: " + tab.length);

tab1.forEach(element => {
    console.log(element.length);  
});

tab1.unshift("Chomik");
console.log(tab1);

tab1.splice(1, 0, 'Piotr');

var myNewTable = [];


// random numbers generator

var randomNumber = Math.floor(Math.random()*10) + 1;

function generateArray() {
    for (var i = 0; i < 6; i++) {
        myNewTable.push(Math.floor(Math.random()*10) + 1);     
    }
}
generateArray();

console.log(myNewTable);

console.log(myNewTable.sort());

console.log(myNewTable.sort(function(a,b){
    a - b;
}));

console.log(myNewTable);

const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Agnieszka", age: 13},
    {name : "Weronika", age: 20}
]

console.log(tabUsers[0].age);


function sortElements() {
    for (let i = 0; i < tabUsers.length; i++) {
        var adultsAge = tabUsers[i].age
            if (adultsAge >= 18) {
                console.log(tabUsers[i]);   
            }
        }
        
    };
sortElements();


function average (arr){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += arr[i];
    }
    return (sum/i);
}
console.log(sum/i);
