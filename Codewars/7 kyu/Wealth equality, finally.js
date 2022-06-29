function redistributeWealth(wealth) {
    const sumOfWealth = wealth.reduce((acc, value) => acc += value, 0);

    const citizens = wealth.length;

    const wealthPerCap = sumOfWealth / citizens;

    let newArr = wealth.fill(wealthPerCap);
}