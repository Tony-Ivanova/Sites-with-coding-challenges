function isIsogram(str) {

    if (str === '') {
        return true;
    }

    let arr = str.toLowerCase().split('')

    let isIsogram = true;

    for (let i = 0; i < arr.length; i++) {
        let currentChar = arr[i]
        let isOccuringLater = arr.includes(currentChar, i + 1);

        if (isOccuringLater) {
            isIsogram = false;
            return isIsogram
        }
    }

    return isIsogram

}