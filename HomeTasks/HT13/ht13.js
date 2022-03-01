function limitStr(str, n, symb) {
    if (n != undefined) {
        str = str.slice(0, n - 1);

        if (symb != undefined) {
            str = str + symb;
        } else {
            str = str + '...';
        }
    }
    return str;
}
console.log(limitStr('Каждый охотник желает знать.')); // Каждый охотник желает знать.
console.log(limitStr('Каждый охотник желает знать.', 15)); // Каждый охотник...
console.log(limitStr('Каждый охотник желает знать.', 22, '!')); // Каждый охотник желает!