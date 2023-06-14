////Find out palindromes using anonymous function

let palindromes = (function(get){
//loop through given parameter
let bag=[];
for(i=0;i<get.length;i++){
    
    let pari = get[i].split('').reverse().join('');
  
    result = get[i]==pari?bag.push(get[i]):null
}return bag;

});
//// solving problem using (anonymous)IIFE function
let check =['mommy','dad','tenet','haha','wow'];
check = palindromes(check);
console.log(check);


////solving problem using IIFE functio

((get)=>{
    let bag=[];
for(i=0;i<get.length;i++){
    
    let pari = get[i].split('').reverse().join('');
  
    result = get[i]==pari?bag.push(get[i]):null
}console.log(bag);

})(check);