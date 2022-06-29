function minMax(arr) {
    let arrSorted = arr.sort((a, b) => a - b);
    let min = arrSorted[0];
    let max = arrSorted[arrSorted.length - 1];

    return [min, max]; // fix me!
}
