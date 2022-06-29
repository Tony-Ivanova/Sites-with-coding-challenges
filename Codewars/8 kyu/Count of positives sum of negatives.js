function countPositivesSumNegatives(input) {
    if (!input) {
        return []
    }

    let negativeSum = 0;
    let positiveCount = 0;

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i]
        if (currentElement < 0) {
            negativeSum += currentElement
        } else if (currentElement > 0) {
            positiveCount++
        }
    }

    return !negativeSum && !positiveCount ? [] : [positiveCount, negativeSum]
}