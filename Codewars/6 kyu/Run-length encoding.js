var runLengthEncoding = function (str) {
    let arr = [];
    let value = 1;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let nextChar = str[i + 1];

        if (currentChar !== nextChar) {
            arr.push([value, currentChar])
            value = 1;
        } else {
            value++;
        }
    }

    return arr
}