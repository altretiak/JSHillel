function compareString(str1, str2) {

    if (str1.toUpperCase() === str2.toUpperCase()) {
        return true;
    } else {
        return false;
    }

};
console.log(compareString('string', 'StRiNg')); // true 
console.log(compareString('ABCDe', 'AbcdW')); // false