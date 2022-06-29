const reverseSeq = n => {

    let result = []

    while (n > 0) {
        result.push(n)
        n--
    }

    return result
};