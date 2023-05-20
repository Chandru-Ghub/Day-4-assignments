///Sum of Numbers inside array using Arrow function;
let SumOfArray = (array) =>{
sum =0;
for(i=0;i<array.length;i++){
   sum = sum+array[i];
}
return sum;
}
/// Solving problem using function
let arr = [1,2,3,4,5];
console.log(SumOfArray(arr));