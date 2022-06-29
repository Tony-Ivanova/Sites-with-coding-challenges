function sumDigNthTerm(initval, patternl, nthterm) {

    let current = initval;
    let arr = new Array();

    for (let i = 0; i < nthterm - 1; i++) {

        initval += Number(patternl[i % patternl.length]);
    }

    return String(parseInt(initval, 10))
        .split('')
        .map(Number)
        .reduce((a, b) => a + b)
}
