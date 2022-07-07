'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const searchedArr = s.split('');
    let allVowels = [];
    let allConsonants = [];
    
    for(let i=0; i<searchedArr.length; i++){
        let currentLetter = searchedArr[i];
        
        if(vowels.includes(currentLetter)){
            allVowels.push(currentLetter);
        }else{
            allConsonants.push(currentLetter);
        }
    }
    
    let allLetters = allVowels.concat(allConsonants);
    
    allLetters.map(x=>console.log(x));
}

