function persistence(num) {
    let iterations = 0;

    num = num.toString()

    while (num.length > 1) {
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
        iterations++
    }

    return iterations;
}