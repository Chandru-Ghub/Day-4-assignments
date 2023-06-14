 

 //////Find prime numbers inside an array using anonymous function
let findPrimeInArray = function(a){
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
/////solving problem using (anonymous) pure function
let num = [7,9,5,3,4,2];
//Set a variable to the catch the return value from function
const output = findPrimeInArray(num);
console.log(output);



///solving problem usin IIFE function
let res =[];
let tag = [];
((prime)=>{
  for(i=0;i<prime.length;i++){
    let isPrime = true
    for(j=2;j<prime[0];j++){
        if(prime[i]%j==0 && prime[i]!=j){
            isPrime = false;
        }
    }
    if(isPrime==true){
        tag.push(prime[i]);
    }
    
  }
  for(i in tag){
  if(tag[i]!=1){
  res.push(tag[i])
  }
  }
  console.log(tag);
   console.log(res);
})(num)