///Medain of two sorted arrays

let medianOf2arraya = function(x,y){

    let combin = [...x,...y].sort((a,b)=>a-b);
    // get the floor value
    let half = combin.length/2 | 0;

    //if odd then return middle element
     if(combin.length % 2 !=0) return combin[half];
    
     //if even then return the average of two mid element
     return (combin[half] + combin[half-1])/2;
} 


let a =  [1, 12, 15, 26, 38];
let b = [2, 13, 17, 30, 45, 47];
let result = medianOf2arraya(a,b)
console.log(result);

