// Triangular Treasure
function triangular( n ) {
   if(n <= 0){
     return 0
   }
  
   return (n*(n+1))/2 
}

// Isograms
function isIsogram(str){
  
    if(str === ''){
      return true;
    }
  
   let arr = str.toLowerCase().split('')
   
   let isIsogram = true;
  
  for(let i=0; i<arr.length; i++){
     let currentChar = arr[i]
     let isOccuringLater = arr.includes(currentChar, i+1);
     
     if(isOccuringLater){
       isIsogram = false;
       return isIsogram
     }
   }
  
  return isIsogram
   
}

// Highest and Lowest
function highAndLow(numbers){
 
   let arr = numbers.split(' ').map(Number)
 
   let minimum = Math.min(...arr)
   let maximum = Math.max(...arr);
  
  
  return `${maximum} ${minimum}`
}

// Beginner Series #3 Sum of Numbers
function getSum( a,b )
{
   if(a===b){
     return a
   }
  
   let minimum = Math.min(a, b)
   let maximum = Math.max(a, b)
   
   let sum = 0
   
   while(minimum <= maximum){
     sum += minimum
     minimum++
   }
  
   return sum
}

// Is this a triangle?
function isTriangle(a,b,c)
{
   return ((a + b > c) && (b + c > a) && (c + a > b))  
}

// Transposing a song
function transpose(song, interval){
   const sharpNotes = ['A', 'A#', 'B', 'C','C#','D','D#','E','F','F#','G','G#']
   const flatNotes = ['A', 'Bb', 'B', 'C','Db','D','Eb','E','F','Gb','G','Ab']
  
   return song.map(note => {
     let isFlatNote = flatNotes.indexOf(note);
     let isSharpNote = sharpNotes.indexOf(note);
     
     return isSharpNote === -1 
       ? note = sharpNotes[(isFlatNote + interval + 12)%12]
       : note = sharpNotes[(isSharpNote + interval + 12)%12]
   })
  }

// You're a square!
var isSquare = function(n){
   if(n < 0)
     return false
  
   return Number.isInteger(Math.sqrt(n))
}

// Complementary DNA

function DNAStrand(dna){
    const arr = dna.split('')
    
    return arr.map(letter => {
      switch(letter){
          case 'A':
          return 'T'
          case 'T':
          return 'A'
          case 'G':
          return 'C'
          case 'C':
          return 'G'
          default:
          break;
      }
    }).join('');
}

// List Filtering
function filter_list(l) {
    return l.filter(x =>
    {
     if(typeof(x) === 'number' || x === 0){
       return true
     }
    })
}

// Minimize Sum Of Array (Array Series #1)
function minSum(arr) {
   let fromSmallest = arr.sort((a, b) => a-b)
   let sum = 0;
  
   for(let i=0; i < arr.length  /2; i++){
     sum += arr[i] * arr[arr.length - i -1]
   }
  
    return sum
}

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {  
   return numbers.sort((a, b) => a - b)
                 .slice(0, 2)
                 .reduce((a, b) => a + b, 0)
}

// Jaden Casing Strings
String.prototype.toJadenCase = function () {
   return this.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
};

// Barista problem
function barista(coffees){
    if(coffees.length == 0){
      return 0;
    }
  
  let sum = 0
    
    coffees.sort((a, b) => a-b)
                  .reduce((acc, value, index) => {
                        acc = acc + 2 + value
                        sum += acc
                        return acc
                  })
  
  return sum + coffees[0]
}

// Digital cypher
function encode(str,  n)
{
  let cypher = n.toString().split('').map(Number)
  
  let dictionary = {
    'a' : 1,
    'b' : 2,
    'c' : 3,
    'd' : 4,
    'e' : 5,
    'f' : 6,
    'g' : 7,
    'h' : 8,
    'i' : 9,
    'j' : 10,
    'k' : 11,
    'l' : 12,
    'm' : 13,
    'n' : 14,
    'o' : 15,
    'p' : 16,
    'q' : 17,
    'r' : 18,
    's' : 19,
    't' : 20,
    'u' : 21,
    'v' : 22,
    'w' : 23,
    'x' : 24,
    'y' : 25,
    'z' : 26,
  }
  
  let arr = str.split('').map(x => dictionary[x])
  
  return arr.map(x => {
      let forCrypt = cypher.shift()
      cypher.push(forCrypt)
      return x+forCrypt
  })
}

// Regex validate PIN code
function validatePIN (pin) {
  return /^[0-9]{4}$/.test(pin) || /^[0-9]{6}$/.test(pin)
}

// Mumbling
function accum(s) {
   return s.toLowerCase().split('').reduce((acc, value, index) => {
      
     let currentIteration = Array(index+1) //the size of the array
                            .fill(value) //fill it with the value
                            .join('')    //turn it into string
     
      return acc += (currentIteration.charAt().toUpperCase() 
                     + currentIteration.slice(1)) 
                     + '-' //concatenate the firstChar to Uppercase + the rest of the string + -
                
   }, []).slice(0, -1) //remove the last -
}

// Odd or Even?
function oddOrEven(array) {
    return array.reduce((a, b) => a+b, 0) % 2 === 0 ? 'even':'odd'
}
