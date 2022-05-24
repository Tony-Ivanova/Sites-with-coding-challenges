// Reach Me and Sum my Digits
function sumDigNthTerm(initval, patternl, nthterm) {
    
    let current = initval;
    let arr = new Array();
  
    for(let i=0; i < nthterm-1; i++){
   
      initval += Number(patternl[i % patternl.length]);
    }

    return String(parseInt(initval, 10))
            .split('')
            .map(Number)
            .reduce((a,b) => a+b)
}

// Run-length encoding
var runLengthEncoding = function(str){
   let arr = [];
   let value = 1;  
    
   for(let i=0; i < str.length; i++){
     let currentChar = str[i];
     let nextChar = str[i+1];

     if(currentChar!==nextChar){
       arr.push([value, currentChar])
       value=1;
     }else{
       value++;
     }    
   }

    return arr
}

// Persistent Bugger.
function persistence(num) {
   let iterations = 0;
  
   num = num.toString() 
  
   while(num.length > 1){
     num = num.split('').map(Number).reduce((a, b) => a*b).toString();
     iterations++
   }
  
   return iterations;
}
