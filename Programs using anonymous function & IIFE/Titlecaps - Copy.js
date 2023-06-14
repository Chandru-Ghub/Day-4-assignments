//// title caps using Anonymous function

let titlecaps = (function (string){


let bag=[];
for(i=0;i<string.length;i++){
//Change the first character of the element and add with the single slice value 
  let tit= string[i].charAt(0).toUpperCase()+string[i].slice(1);
    bag.push(tit);
}  return bag;

})
let str = ['apple','mango','orange','grapes'];
k = titlecaps(str);
console.log(k);


///////////solving problem using IIFE
(function(string){

  let bag=[];
  for(i=0;i<string.length;i++){
  //Change the first character of the element and add with the single slice value 
    let tit= string[i].charAt(0).toUpperCase()+string[i].slice(1);
      bag.push(tit);
  }  console.log(bag);
  
})(str);