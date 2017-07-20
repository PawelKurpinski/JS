var todos = ["Ala ma kota"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addNewTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}
console.log("Ok you QUIT the app!");

function listTodos() {
    console.log("***********");
    todos.forEach(function(toDo, i) {
        console.log(i + ": " + toDo);
    });
    console.log("**********");
}
function addNewTodo() {
    var newToDo = prompt("What kind of activity would you like do add?");
    todos.push(newToDo);
    console.log("Added Todo");
}
function deleteTodo(){
    var index = prompt("Eneter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted Todo");
}
