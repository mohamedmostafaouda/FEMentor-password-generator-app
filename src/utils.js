export function calculatePasswordStrength(options, characterCount) {
    let complexityScore = 0;
    if (options.uppercase) complexityScore += 1;
    if (options.lowercase) complexityScore += 1;
    if (options.numbers) complexityScore += 1;
    if (options.symbols) complexityScore += 1;

    let strengthLevel = 0;
    if (characterCount >= 8 && complexityScore >= 3) {
        strengthLevel = 3;
    } else if (characterCount >= 6 && complexityScore >= 2) {
        strengthLevel = 2;
    } else if (characterCount >= 4 && complexityScore >= 1) {
        strengthLevel = 1;
    }

    return strengthLevel;
}


export function generatePassword(selectedAttributes, charactersCount) {
    // Define character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-={}[]|\\:;"<>,.?/';

    // Create a pool of characters based on options
    let characterPool = 'abcdefghijklmnopqrstuvwxyz';
    if (selectedAttributes.uppercase) characterPool += uppercaseChars;
    if (selectedAttributes.lowercase) characterPool += lowercaseChars;
    if (selectedAttributes.numbers) characterPool += numberChars;
    if (selectedAttributes.symbols) characterPool += symbolChars;

    // Generate the password
    let password = '';
    for (let i = 0; i < charactersCount; i++) {
        const index = Math.floor(Math.random() * characterPool.length);
        password += characterPool.charAt(index);
    }
    return password;
}


export function isEmptyString(str) {
    if (!str || str?.length === 0) {
        return true
    }

    return false
}