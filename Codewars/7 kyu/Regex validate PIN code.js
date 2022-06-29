function validatePIN(pin) {
    return /^[0-9]{4}$/.test(pin) || /^[0-9]{6}$/.test(pin)
}