function accum(s) {
    return s.toLowerCase().split('').reduce((acc, value, index) => {

        let currentIteration = Array(index + 1) //the size of the array
            .fill(value) //fill it with the value
            .join('')    //turn it into string

        return acc += (currentIteration.charAt().toUpperCase()
            + currentIteration.slice(1))
            + '-' //concatenate the firstChar to Uppercase + the rest of the string + -

    }, []).slice(0, -1) //remove the last -
}