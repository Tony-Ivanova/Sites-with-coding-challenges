function findOdd(A) {
    let arr = {}

    A.forEach(x => {
        arr[x] = arr[x] ? arr[x] + 1 : 1
    })

    return Number(Object.keys(arr).find(key => arr[key] % 2 === 1))
}