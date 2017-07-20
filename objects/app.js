// var person = {
//     name:"Paul",
//     age: 37,
//     city: "LA"
// };
// console.log(person["name"]);
// console.log(person.city);
//
// var posts = [
//     {
//         title: "test title",
//         author: "Colt",
//         comments: ["love", "hate"]
//     },
//     {
//         title:"Cats are actually awesome",
//         author: "Cat Luvr",
//         comments: ["yes", "no"]
//     }
// ]
// access
// posts[1].comments[1] -> "love"
var movies = [
    {
        title: "Stawka",
        rating: 4,
        see: "no"
    },
    {
        title: "Terminator",
        rating: 5,
        see: "yes"
    },
    {
        title: "Desperado",
        rating: 2,
        see: "no"
    }
];

function givingAnswer(arr){
    for(var i=0 ; i < arr.length; i++){
        var mov = arr[i]
        if (mov.see === "no") {
            console.log("You have not seen "+ mov.title + " - " + mov.rating + " stars" );
        } else {
            console.log("You have seen "+ mov.title + " - " + mov.rating + " stars");
            }
    }
};
givingAnswer(movies);
