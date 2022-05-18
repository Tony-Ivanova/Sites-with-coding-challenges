function solution(A) {
    const sortedArr = A.sort();

    for (let i = 0; i < A.length; i++) {
        if ((i % 2 === 0) && (sortedArr[i] !== sortedArr[i + 1])) {
            return sortedArr[i]
        }
    }
}
