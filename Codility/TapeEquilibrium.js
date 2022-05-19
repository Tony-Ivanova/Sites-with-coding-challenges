function solution(A) {
    let sumEntireArray = A.reduce((a, b) => a + b, 0)

    let minPossibleDifference = Number.MAX_VALUE;
    let currentDifference = Number.MIN_VALUE;

    let leftSum = 0;

    for(let i=0; i < A.length -1; i++){
        leftSum += A[i]
        
        let rightSum = sumEntireArray - leftSum;

        currentDifference = Math.abs(leftSum - rightSum);

        if(currentDifference < minPossibleDifference){
            minPossibleDifference = currentDifference;
        }        
    }

    return minPossibleDifference
}
