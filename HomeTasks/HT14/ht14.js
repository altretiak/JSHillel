function isUpperCase(str, character) {
    if (str.charAt(character).toUpperCase() === str.charAt(character)) {
        return true;
    } else { return false; }
};

console.log(isUpperCase('tasks JavaScript', 6)); // true