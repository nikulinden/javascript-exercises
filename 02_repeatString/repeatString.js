const repeatString = function(stringToRepeat, repetitions) {
    let temp = '';
    if (repetitions < 0) {
        return "ERROR";
    }
    
    for (let i = 0; i < repetitions; i++) {
        temp += stringToRepeat;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
