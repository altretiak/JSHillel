// function myPow(number, power) {
//     let result = number ** power;
//     return result;
// }

// let result = myPow(prompt('введите число'), prompt('введите степень'));
// alert(result);


// function myPow(a, b) {
//     let result = a;
//     for (let i = 1; i < b; i++) {
//         result = result * a;
//     }
//     return result;
// }


function myPow(number, power) {
    let result = number;
    for (let i = 1; i < power; i++) {
        result = result * number;
    }
    return result;
}
let result = myPow(prompt('введите число'), prompt('введите степень'));
alert(result);