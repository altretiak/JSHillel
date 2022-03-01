const without = function(object, ...args) {
    let newObj = {...object };
    args.forEach(element => {
        delete newObj[element];
    });
    return newObj;
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1 }