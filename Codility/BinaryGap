function solution(N) {
    let toBinary = N.toString(2);
    let result = 0;

    while (true) {
        let firctOccurance = toBinary.indexOf('1');
        let nextOccurance = toBinary.indexOf('1', firctOccurance + 1);

        if (firctOccurance === -1 || nextOccurance === -1) {
            break;
        }

        let currentResult = nextOccurance - firctOccurance - 1;

        if(result < currentResult){
            result = currentResult;
        }

        toBinary = toBinary.substring(nextOccurance)
    }

    return result;
}
