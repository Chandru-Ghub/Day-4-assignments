///Remove duplicates from an array using anonymous function

let find_Duplicate = function (dup){

let bag =[];
//loop through dup
for(i=0;i<dup.length;i++){
    if(bag.includes(dup[i])==false){
        bag.push(dup[i]);
    }
}return bag;

}
/// solving problem using (anonymous) pure function
let numbers = [1,2,4,1,6,4,9,9];
let result = find_Duplicate(numbers);
console.log(result);



//.........................
////solving problem using IIFE function

(function(dup){
    let bag =[];
//loop through dup
for(i=0;i<dup.length;i++){
    if(bag.includes(dup[i])==false){
        bag.push(dup[i]);
    }
}console.log(bag);
})(numbers);