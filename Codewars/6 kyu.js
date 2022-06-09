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

// Counting Duplicates
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

// Are they the "same"?
function comp(array1, array2){
  
 if(!array1 || !array2){
   return false
 } 
  
  array1.sort((a, b) => a - b); 
  array2.sort((a, b) => a - b);
  
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

//Who likes it?
function likes(names) {
   if(!names.length)
    return 'no one likes this'
   if(names.length === 1)
    return `${names[0]} likes this`
   if(names.length === 2)
    return `${names[0]} and ${names[1]} like this`
   if(names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`

    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

//Pair of gloves
function numberOfPairs(gloves){
   let arr = gloves.slice().sort((a,b)=>a.localeCompare(b))
   let pairs = 0;
   for (let i=1;i<arr.length;i++){
     if (arr[i-1]===arr[i]){
       pairs++
       i++
     }
   }
   return pairs
}
