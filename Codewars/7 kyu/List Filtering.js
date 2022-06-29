function filter_list(l) {
    return l.filter(x => {
        if (typeof (x) === 'number' || x === 0) {
            return true
        }
    })
}