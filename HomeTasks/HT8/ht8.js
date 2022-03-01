// let str = prompt('enter text');
// let subStr = prompt('enter subtext');
// let newSubStr = prompt('enter new text');
// for (let i = 0; i < str.length; i++) {
//     if (str.substring(i, i + subStr.length) == subStr) {
//         str = str.substring(0, i) + newSubStr + str.substring(i + subStr.length, str.length);
//     }
// }
// console.log(str);
// alert(str);

let str = prompt('Введите строку');
let subStr = prompt('Введите подстроку');
let newSubStr = prompt('Введите новую строку для замены');
let pos = -1;
let newStr = '';
while ((pos = str.indexOf(subStr, pos + 1)) != -1) {
    newStr = str.substring(0, pos) + newSubStr + str.substring(pos + subStr.length, str.length);
}
if (newStr == '') {
    alert("В строке не найдена подстрока для ее замены");
} else {
    alert(newStr);
}