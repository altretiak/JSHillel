const isEqual = (firstArray, secondArray) => {
    if (firstArray.length != secondArray.length) {
        return false;
    }
    var i = firstArray.length;
    while (i--) {
        if (firstArray[i] != secondArray[i]) { return false; }
    }
    return true;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false