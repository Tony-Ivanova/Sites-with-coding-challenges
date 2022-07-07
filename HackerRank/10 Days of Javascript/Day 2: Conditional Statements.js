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

function getLetter(s) {
    let letter;
    // Write your code here
    let firstSet = ["a", "e", "i", "o", "u"];
    let secondSet = ["b", "c", "d", "f", "g"];
    let thirdSet = ["h", "j", "k", "l", "m"];
    let forthSet = ["n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    
    let firstLetter = s[0];
    if(firstSet.includes(firstLetter)){
        letter = 'A';
    }else if(secondSet.includes(firstLetter)){
        letter = 'B';
    }else if(thirdSet.includes(firstLetter)){
        letter = 'C';
    }else if(forthSet.includes(firstLetter)){
        letter = 'D';
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
