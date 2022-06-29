function numberOfPairs(gloves) {
    let arr = gloves.slice().sort((a, b) => a.localeCompare(b))
    let pairs = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            pairs++
            i++
        }
    }
    return pairs
}