function printReverse(arr){
for(var i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
    }
};
printReverse([1, 2, 3, 4]);

///////////////////////////
function isUniform(arr2){
var first = arr2[0];
for(var j=1; j< arr2.length; j++){
    if(arr2[j] !== first){
        console.log("false");
        return false
        }
    }
    console.log("true");
    return true
};
isUniform([2, 2, 2, 2]);

//////////////////////////////
function sumArray(arr3){
    var sum = 0;
    for(var k=0; k<arr3.length; k++){
        sum = sum + arr3[k];
    }
    console.log(sum);
};
sumArray([1, 1, 1]);

//////////////////////////////

function max (arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
