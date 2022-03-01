const isEqual = function(firstObject, secondObject) {
    const firstObjectKeys = Object.keys(firstObject);
    const secondObjectKeys = Object.keys(secondObject);
    console.log(firstObjectKeys, 'firstObjectKeys');
    console.log(secondObjectKeys, 'secondObjectKeys');

    if (firstObjectKeys.length !== secondObjectKeys.length) {
        console.log('firstObjectKeys.length !== secondObjectKeys.length');
        return false;

    }
    for (var property in firstObject) {

        if (firstObject[property] !== secondObject[property]) {
            console.log('firstObject[property] !== secondObject[property]');
            return false;
        };

    };
    return true;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false