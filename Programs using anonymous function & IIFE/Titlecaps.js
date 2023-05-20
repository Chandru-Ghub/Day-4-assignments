//// title caps using Anonymous function

let titlecaps = (function (string){


let bag=[];
for(i=0;i<string.length;i++){
//Change the first character of the element and add with the single slice value 
  let tit= string[i].charAt(0).toUpperCase()+string[i].slice(1);
    bag.push(tit);
}  return bag;

})
///// solving problem using (anonymous) IIFE function
let str = ['apple','mango','orange','grapes'];
k = titlecaps(str);
console.log(k);