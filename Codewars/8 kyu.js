// Multiply
function multiply(a, b){
  return a*b
}

//You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2;
}

// Convert a String to a Number!
const stringToNumber = function(str){
  return Number(str);
}

// Opposites Attract
function lovefunc(flower1, flower2){
  if(flower1 % 2 === 0 && flower2 % 2 !== 0
    || flower1 % 2 !==0 && flower2 % 2 ===0){
    return true
  }else{
    return false
  }
}

// Is he gonna survive?
function hero(bullets, dragons){
   return bullets >= 2 * dragons ? true : false
}

// Reversed sequence
const reverseSeq = n => {

  let result = []
  
  while(n>0){
    result.push(n)
    n--
  }
  
  return result
};

// Sum Arrays
function sum (numbers) {
    "use strict";
    
     return numbers.length === 0
     ? 0
     : numbers.reduce((a,b) => a+b, 0)
};

// A Needle in the Haystack
function findNeedle(haystack) {
   let position = haystack.indexOf('needle');
  
   if(position !== -1){
     return `found the needle at position ${position}`
   }
}

// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if(!input){
      return []
    }
  
    let negativeSum = 0;
    let positiveCount = 0;
  
    for(let i=0; i<input.length; i++){
      let currentElement = input[i]
      if(currentElement < 0){
         negativeSum += currentElement
      }else if(currentElement > 0){
         positiveCount ++
      }
    }
      
    return !negativeSum && !positiveCount ? [] : [positiveCount, negativeSum] 
}

// Fake Binary
function fakeBin(x){
    let arr = x.split('')
    
    return arr.map((y) => {
      if(Number(y) < 5){
        return 0
      } else{
        return 1
      }
    }).join('')
}

// Convert a Boolean to a String
function booleanToString(b){
  return b.toString()
}

// Return Negative
function makeNegative(num) {
      return Math.abs(num) * -1
}

// You only need one - Beginner
function check(a, x) {
  return a.includes(x)
}

// DNA to RNA Conversion
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}



