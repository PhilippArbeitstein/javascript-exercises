const repeatString = function(inputString, repetitions) {
    if(repetitions < 0) {
        return "ERROR";
    }
    let output = "";
    let i = 0;
    while(i < repetitions) {
        output += inputString;
        i++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
