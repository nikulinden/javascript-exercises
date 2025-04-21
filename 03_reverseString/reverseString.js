const reverseString = function(input_string) {
    let charArray = input_string.split("");
    let reversedArray = [];
    for (let char = charArray.length-1; char >= 0; char--){
        reversedArray.push(charArray[char])
    }
    let finalString = reversedArray.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
