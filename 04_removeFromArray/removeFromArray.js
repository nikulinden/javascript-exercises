const removeFromArray = function(originalArray, toRemove) {
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] === toRemove) {
            originalArray.splice(i, 1);
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
