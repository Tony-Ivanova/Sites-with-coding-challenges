function getSum(a, b) {
    if (a === b) {
        return a
    }

    let minimum = Math.min(a, b)
    let maximum = Math.max(a, b)

    let sum = 0

    while (minimum <= maximum) {
        sum += minimum
        minimum++
    }

    return sum
}