var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
notAllowSymbols = [';', ':', ',', ':', '{', '}', '@', '#', '$', '%', '^', '&', '*', '.', '-', '!', '/'];

function removeСhar(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (!notAllowSymbols.includes(str[i])) {
            newStr = newStr + str[i];
        }
    }
    withoutSpaceStr = '';
    for (j = 0; j < newStr.length; j++) {
        if (!(newStr[j] === ' ' && newStr[j + 1] === ' ')) {
            withoutSpaceStr += newStr[j];
        }
    }
    return withoutSpaceStr;
}

console.log(removeСhar(str)); // "every hunter wishes to know"