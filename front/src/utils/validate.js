
const validate = (value, options) => {
    let validationResult = {
        requiredIsOk: true,
        maxLengthIsOk: true,
        regExpIsOk: true,
        isOk: true
    }

    if (options) {

        if (options.checkRequired) {
            if (!value.length) validationResult.requiredIsOk = false;
            if (!value.trim()) validationResult.requiredIsOk = false;            
        }

        if (options.checkMaxLength) {
            if (value.length > 12) validationResult.maxLengthIsOk = false;
        }

        if (options.checkRegExp) {
            let regEx = new RegExp("^[a-zA-Z0-9_]{2,32}$");
            validationResult.regExpIsOk = regEx.test(value);
        }

        if (!validationResult.requiredIsOk || !validationResult.maxLengthIsOk || !validationResult.regExpIsOk) validationResult.isOk = false;
    }

    return validationResult;
}

module.exports = validate;