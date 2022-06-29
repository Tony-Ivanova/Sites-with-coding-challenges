function barista(coffees) {
    if (coffees.length == 0) {
        return 0;
    }

    let sum = 0

    coffees.sort((a, b) => a - b)
        .reduce((acc, value, index) => {
            acc = acc + 2 + value
            sum += acc
            return acc
        })

    return sum + coffees[0]
}