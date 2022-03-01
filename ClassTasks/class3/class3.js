// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// function newFunc(arr) {
//     let newArr = arr.filter(el => Array.isArray(el))
//     return newArr;
// }
// console.log(newFunc(arr));

let array = [];
let symbol = prompt(' Введите элемент массива');
let sum = 0;
while (isNan(symbol)) { array.push(symbol) };

function sumInput(array) {
    array.forEach(function(elem) {
        let sum = sum + elem;
    });
    return sum;
}