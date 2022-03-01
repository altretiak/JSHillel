let str = prompt('Enter string');
let numStr = '';
for (let i = 0; i < str.length; i++) {
    let dec = Number(str[i]);
    if (!isNaN(dec)) {
        numStr = numStr + str[i];
    }
}
console.log(numStr);
alert(numStr);