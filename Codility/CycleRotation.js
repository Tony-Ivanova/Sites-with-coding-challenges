function solution(A, K) {
    if(A.length == 0 || K === 0){
        return A;
    }
    
    for(let i = 0; i < K ; i++){
        // let last = A.pop();
        // A.unshift(last);

        let last = A[A.length -1];
        let newA = A.slice(0, A.length - 1);
        A = [last, ...newA]
    }

    return A;
}
