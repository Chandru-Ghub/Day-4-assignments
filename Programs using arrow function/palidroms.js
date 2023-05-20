
//Find out the given array element is Palindrom or not using Arrow function;

let palindromes = (get)=>{
    //loop through given parameter
    let bag=[];
    for(i=0;i<get.length;i++){
        
        let pari = get[i].split('').reverse().join('');
      
        result = get[i]==pari?bag.push(get[i]):null
    }return bag;
    
    };
    //// solving problem using (anonymous)IIFE function
    let check =['mommy','dad','tenet','haha','wow'];
    check = palindromes(check);
    console.log(check);