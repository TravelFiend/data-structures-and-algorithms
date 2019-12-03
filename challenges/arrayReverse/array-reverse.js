const reverseArray = arr => {
    let newArr = [];
    let increment = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr[increment] = arr[i];
        increment++;
    }
    return newArr;
};

module.exports = reverseArray;
