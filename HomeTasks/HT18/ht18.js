function palindrome(str) {
    console.log(str);
    var str = str.toUpperCase();
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            newStr += str[i];
        }
    }
    var modified = newStr.split('');
    var reversed = newStr.split('').reverse();
    let len = reversed.length;
    var i = modified.length;
    while (i--) {
        if (modified[i] != reversed[i]) { return false; }
    }
    return true;
}
console.log(palindrome('racecar')); // true
console.log(palindrome('table')); // false
console.log(palindrome('Анна')); // true
console.log(palindrome('А роза упала на лапу Азора')); // true