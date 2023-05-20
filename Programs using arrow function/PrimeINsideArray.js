 //////Find prime numbers inside an array using ARROW function
 let findPrimeInArray = (a)=>{
    let bag=[];
    for(j=0;j<a.length;j++){
    
    //let consider all prime
    let prime = true;
    
    //Segregat the number which is not prime
    for(i=2;i<a[j];i++){
        if(a[j]%i == 0 && i != a[j]){    
         prime = false;
        }
    }
    //Remaining primes
    if(prime==true){
        bag.push(a[j]);
       
    }
    }
    //sorting primes in order
    news = (bag.sort((a,b)=> a-b));
    let newbag=[];
    ///Remove the number 1 if it is inside an array 
    for(i=0;i<news.length;i++){
        if(news[i]!=1){
            newbag.push(news[i]);
        }
    }
    //Return the value from the function
    return newbag;
    }
    /////solving problem using (anonymous) ARROW function
    let num = [7,9,5,3,4,2];
    //Set a variable to the catch the return value from function
    const output = findPrimeInArray(num);
    console.log(output);

