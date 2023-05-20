
//Find the odd number Using arrow function
///k = [1,0,5,8,11,42,15]
let findOdd = (arr) =>{
  let bag = [];
for(i=0;i<arr.length;i++ ){
    if(arr[i] % 2 != 0){
        bag.push(arr[i]);
    }
} return bag;
}


//solving Problem by calling function
let a = [0,1,2,3,4,5,6,7,8,9,10];
let odd = findOdd(a);
console.log(odd);