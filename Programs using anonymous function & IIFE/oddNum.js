//Find the odd number Using IIFE function

(function(){
  arr = [1,0,5,8,11,42,15];
  bag=[];
for(i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        bag.push(arr[i])
    }
}console.log(bag);
})();


