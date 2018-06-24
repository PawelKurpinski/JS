var nums = [34, 34, 23, 3, 4];

nums.forEach(function(num){
    console.log(num);
});

// instead of code above we can do something like this:

myForEach(nums, function(num){
    console.log(num);
});/*  here is the crucial thing - we are calling the function in */



// Example II
////////we create our own function we call myForEach/////////////

function myForEach(arr, func){
    for(var i=0; i<arr.length; i++){  ///for loop is looping through the array which is here colors array. So it loops three times and it calls func also three times
        func(); /// here is the crucial thing - we are calling the function inside of the function myForEach and that function here = alert - look below!
    }
}
var colors = ["red","orange","yellow"];
myForEach(colors, alert);

//now when I hit enter I get three empty alerts! So what can I do?

///another modification

function myForEach(arr, func){     ///example A
    for(var i=0; i<arr.length; i++){
        func(arr[i]); /// here is the LITTLE CHANGE! but also crucial thing because for example arr[0] = "red"
    }
}
var colors = ["red","orange","yellow"];
// myForEach(colors, alert);  ///this is the function's execution
//Here we get alert with specific colos for example "alert: red"

///Example III
//we are using an anonymous function - this is clouser to live
myForEach(colors, function(){})  //ATTENTION! function() = anonymous function it's not the invocation of the function instead of the whole part

(function(){
    console.log("I'm a function!");
 
//this will not work because this anonymous function was never invoked so what to do? just add prenthessis after so ...}) and ()
myForEach(colors, function(){alert("HI")})  //here our func from example A is the whole: function(){alert("HI")} And this will work
//But usually we want to alert words from the array and so:
myForEach(colors, function(color){ // so here we are calling our function myForEach from row number 30
    console.log(color);
});
})  //here our func is now:  function(color){
    // console.log(color)
