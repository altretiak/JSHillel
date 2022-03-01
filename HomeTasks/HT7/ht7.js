// let str = ' lorem ipsum';
// let newstr = '';
// let nextCharUp = false;
// let symb;
// for (let i = 0; i < str.length; i++) {

//     if (i == 0 && str[i] !== ' ') {
//         symb = str[i].toUpperCase();
//         newstr = newstr + symb
//     } else if (str[i] == ' ') {
//         nextCharUp = true;
//         symb = str[i]
//         newstr = newstr + symb
//     } else if (nextCharUp == true) {
//         symb = str[i].toUpperCase();
//         newstr = newstr + symb
//         nextCharUp = false;
//     } else if (nextCharUp == false) {
//         symb = str[i];
//         newstr = newstr + symb
//     };
// }
// console.log(newstr, 'my string');
// c
let str = 'lorem ipsum';
let newstr = '';
let nextCharUp = false;

for (let i = 0; i < str.length; i++) {

    if (i == 0 && str[i] !== ' ') {
        newstr = newstr + str[i].toUpperCase();
    } else if (str[i] == ' ') {
        nextCharUp = true;
        newstr = newstr + str[i];
    } else if (nextCharUp == true) {
        newstr = newstr + str[i].toUpperCase();
        nextCharUp = false;
    } else if (nextCharUp == false) {
        newstr = newstr + str[i];
    };
}
console.log(newstr, 'my string');