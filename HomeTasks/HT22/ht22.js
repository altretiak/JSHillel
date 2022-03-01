const isEmpty = function(object) {

    const keys = Object.keys(object);
    if (keys.length === 0) {
        return true;
    }
    return !keys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
const data3 = {};
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
console.log(isEmpty(data3)); // true