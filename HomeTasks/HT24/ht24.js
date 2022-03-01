const makePairs = function(object) {

    // return Object.entries(object);
    let arrayFromObj = [];
    for (let prop in object) {

        arrayFromObj.push([prop, object[prop]]);
    };
    return arrayFromObj;

};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]


// const makePairs = function(object) {

//     return Object.entries(object);

// };

// const data = { a: 1, b: 2 };
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]