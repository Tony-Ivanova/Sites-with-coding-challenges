function processData(input) {
    let word = input.split('\n');
    let howManyWords = word[0];


    for (let k = 1; k <= howManyWords; k++) {
        let odd = '';
        let even = '';
        let currentWord = word[k];

        for (let i = 0; i < currentWord.length; i++) {
            if (i % 2 === 0) {
                odd += currentWord[i];
            } else {
                even += currentWord[i]
            }
        }
        
        console.log(`${odd} ${even}`);
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
