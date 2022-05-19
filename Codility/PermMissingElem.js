function solution(A) {
    let maxNumber = Math.max(...A)

    if(A.length === 0){
        return 1;
    }

    let expectedSum = (maxNumber * (maxNumber + 1)) / 2
    let currentSum = A.reduce((a, b) => a + b, 0)

    if (expectedSum !== currentSum) {
        return expectedSum - currentSum
    } else {
        return A[A.length -1 ] + 1
    }
