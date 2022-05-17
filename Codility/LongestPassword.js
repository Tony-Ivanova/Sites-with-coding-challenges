function solution(S) {
    let arr = S.split(' ');

    let cleanedUpArr = arr.filter(checkValidity)

    function checkValidity(word) {
        let regex = /^[A-Za-z0-9]+$/;
        let regexCheck = regex.test(word);

        let numberOfNumbers = 0;
        let numberOfLetters = 0;

        for (let i = 0; i < word.length; i++) {
            let currentChar = word[i];
            let isNumber = isNaN(currentChar);

            if (!isNumber) {
                numberOfNumbers++;
            }

            if ((/[a-z]/i).test(currentChar)) {
                numberOfLetters++
            }
        }

        if (regexCheck
            && numberOfNumbers % 2 !== 0
            && numberOfLetters % 2 === 0) {

            return true
        }

        return false;
    }

    let finalWord = cleanedUpArr.reduce((firstWord, secondWord) => {
        if (firstWord.length > secondWord.length) {
            return firstWord
        } else {
            return secondWord
        }
    }, '')

    let finalWordLength = finalWord.length;
    
    if(finalWordLength > 0){
        return finalWordLength;
    } else{
        return -1;
    }
}
