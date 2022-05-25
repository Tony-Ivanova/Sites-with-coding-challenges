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

// Find the odd int
function findOdd(A) {
   let arr = {}
 
  A.forEach(x => {
    arr[x] = arr[x] ? arr[x] + 1 : 1
  })
  
  return Number(Object.keys(arr).find(key => arr[key] % 2 === 1))
}

// Find the unique number
function findUniq(arr) {
    return Number(arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x)))
}

// If you can read this...
function to_nato(words) {
  let h =  {
    "A": "Alfa",   "B": "Bravo",   "C": "Charlie",
    "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
    "G": "Golf",   "H": "Hotel",   "I": "India",
    "J": "Juliett","K": "Kilo",    "L": "Lima",
    "M": "Mike",   "N": "November","O": "Oscar",
    "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
    "S": "Sierra", "T": "Tango",   "U": "Uniform",
    "V": "Victor", "W": "Whiskey", "X": "Xray",
    "Y": "Yankee", "Z": "Zulu", 
    ",": ",",     ".": ".",
    "!": "!",     "?": "?",
  }
  
  return [...words.toUpperCase()].map(x => h[x]).filter(y => y !== undefined).join(' ')
}
