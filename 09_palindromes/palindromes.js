const palindromes = function (string) {
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let stringArray = [... cleanString];
    const reverseString = stringArray.reverse().join("");
    return cleanString === reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
