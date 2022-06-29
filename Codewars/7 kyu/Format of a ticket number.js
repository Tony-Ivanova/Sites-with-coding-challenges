function nbrValidTickets(tickets) {
    return tickets.filter(v => /^[a-z]\d[a-z]{4}$/i.test(v)).length
}