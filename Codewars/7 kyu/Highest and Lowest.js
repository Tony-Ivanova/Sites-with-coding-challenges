function highAndLow(numbers) {

    let arr = numbers.split(' ').map(Number)

    let minimum = Math.min(...arr)
    let maximum = Math.max(...arr);


    return `${maximum} ${minimum}`
}