////Sum of all numbers inside array using anonymous function

let sumOfArray = function (num){
     
 sum =0;
    for(i=0;i<num.length;i++){
         sum = sum + num[i];
    }
    return sum;

}
//// solving problem using (anonymous) Pure function
let numbers = [1,2,3,4,5,6];
let k = sumOfArray(numbers);
console.log('sum of number '+ k);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
///solving problems using IIFE function

((num)=>{
     sum =0;
    for(i=0;i<num.length;i++){
         sum = sum + num[i];
    }
    console.log('sum of number '+sum);

})(numbers);