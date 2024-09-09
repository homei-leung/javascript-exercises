const removeFromArray = function(array, ...itemRemove) {
    return array.filter((cell) => !itemRemove.includes(cell));
};

// Do not edit below this line
module.exports = removeFromArray;
