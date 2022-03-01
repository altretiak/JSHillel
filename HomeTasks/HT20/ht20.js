const isPlainObject = function(element) {
    if (typeof(element) === 'object' && element !== null && Array.isArray(element) == true) {
        return false;
    } else return true;
};

const data = { a: 1 };
console.log(isPlainObject(data)); // true