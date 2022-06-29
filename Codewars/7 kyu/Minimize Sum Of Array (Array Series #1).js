function minSum(arr) {
    let fromSmallest = arr.sort((a, b) => a - b)
    let sum = 0;

    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - i - 1]
    }

    return sum
}