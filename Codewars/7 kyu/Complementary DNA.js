function DNAStrand(dna) {
    const arr = dna.split('')

    return arr.map(letter => {
        switch (letter) {
            case 'A':
                return 'T'
            case 'T':
                return 'A'
            case 'G':
                return 'C'
            case 'C':
                return 'G'
            default:
                break;
        }
    }).join('');
}