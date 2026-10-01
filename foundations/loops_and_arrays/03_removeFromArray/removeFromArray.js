const removeFromArray = function(arr, arg1, arg2, arg3, arg4) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arg1 && arr[i] !== arg2 && arr[i] !== arg3 && arr[i] !== arg4) {
            result.push(arr[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
