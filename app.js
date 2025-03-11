const GALACTIC_MAP = getGalaticMap();

/**
 * This function is already written for you!
 * Called whenever the "Navigate!" button is pressed.
 * First, it checks if the given galatic code is valid.
 * If it is valid, it alerts the user of the corresponding galatic address.
 * Otherwise, it informs the user that the given galatic code is invalid. 
 */
function navigate() {
    setErrorText(); // Reset error text

    const code = document.getElementById("galatic-code").value;
    if(isValidGalaticCode(code)) {
        let sector = lookupSectorName(code);
        let unit = lookupDwellingUnit(code);
        let division = lookupDivisionName(code);
        alert(`${unit} ${division} of ${sector}`);
    } else {
        setErrorText("The specified galatic address is invalid.");
    }
}

/**
 * This function should lookup the name of the sector from the
 * given galatic code in a case-insensitive manner using GALATIC_MAP.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {string} The given sector name, e.g. "Charlie"
 */
function lookupSectorName(galaticCode) {
    return "I should return the sector name!"
}

/**
 * This function should lookup the dwelling unit from the
 * given galatic code. You MUST use a loop to accomplish this.
 * You may NOT use the string `split` function NOR may you use
 * regex functions like `matches`, `matchAll`, `exec`, etc.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {string} The given dwelling unit, e.g. "360"
 */
function lookupDwellingUnit(galaticCode) {
    return "I should return the dwelling unit!"
}

/**
 * This function should lookup the division name from the
 * given galatic code according to the specified sector
 * in a case-insensitive manner using GALATIC_MAP.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {string} The given division name, e.g. "Solar Pulsarium Ln"
 */
function lookupDivisionName(galaticCode) {
    return "I should return the division name!"
}

/**
 * This function should first check if msg is a truthy value.
 * If it is, it should add `is-invalid` to the className of the
 * `galatic-code` form control and set the error text. Otherwise,
 * it should reset any error text and invalid form control state.
 * @param {string || null || undefined} msg The given error message, if any.
 */
function setErrorText(msg) {
    // TODO Implement setErrorText
}

/**
 * This function is already written for you!
 * Using regular expressions (regex), it checks whether the given
 * galatic code is in a valid format.
 * @param {string} galaticCode Some galatic code, e.g. C.360@2
 * @returns {boolean} Whether the given code is valid.
 */
function isValidGalaticCode(galaticCode) {
    return /^[a-zA-Z]\.[0-9]+@[0-9]$/.test(galaticCode);
}
