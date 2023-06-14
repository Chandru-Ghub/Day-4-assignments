/// Rotate the given array by using anonymous function

let rotateArray = (function(rotate,times){

for(i=0;i<times;i++){
rotate.unshift(rotate.pop());
//rotate left side
//rotate.push(rotate.shift());
}
return rotate;
})

/// solving problem using (anonymous) IIFE function 
///ROTATING ON RIGHT SIDE BY K TIMES
let array1 = ['a','b','c','d','e'];
///OUTPUT ['c','d','a','b']
///enter number of times to rotate
let result = rotateArray(array1,2);
console.log(result);


///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//solving problem using IIFE function
let arr1 = ['a','b','c','d','e'];

((rotate,times)=>{
    for(i=0;i<times;i++){
        rotate.unshift(rotate.pop());
        //rotate left side
        //rotate.push(rotate.shift());
        }
        console.log(rotate);
        
})(arr1,2);