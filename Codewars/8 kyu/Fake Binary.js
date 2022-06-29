function fakeBin(x) {
    let arr = x.split('')

    return arr.map((y) => {
        if (Number(y) < 5) {
            return 0
        } else {
            return 1
        }
    }).join('')
}