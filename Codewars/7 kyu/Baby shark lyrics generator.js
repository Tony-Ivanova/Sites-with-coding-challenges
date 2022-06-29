function babySharkLyrics() {
    const family = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"];

    let str = '';
    let doo = ' doo'.repeat(6);

    family.map(f => {
        str += `${f},${doo}\n`.repeat(3) + `${f}!\n`
    })
    str += 'Run away,…'
    return str;
}