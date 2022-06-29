function sum(numbers) {
    "use strict";

    return numbers.length === 0
        ? 0
        : numbers.reduce((a, b) => a + b, 0)
};