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
