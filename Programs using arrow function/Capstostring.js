//// title caps using Arrow function

let titleCaps = (str) => {
    let bag = [];
    for(i=0;i<str.length;i++){
    
    let cap = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     bag.push(cap);
}
return bag;
}


///Solving problem by calling function
let a = ['apple', 'orange', 'mango', 'grapes']
console.log(titleCaps(a));