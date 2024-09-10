const removeFromArray = function(inputArr, ...toRemove) {
    return inputArr.filter(element => !toRemove.includes(element)); 
};

// Do not edit below this line
module.exports = removeFromArray;
