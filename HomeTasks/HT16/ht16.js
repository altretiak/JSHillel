const unique = (array) => {
    console.log(array, "old");
    let newArray = [];
    for (let element of array) {
        if (!newArray.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}
const data = [1, 2, 1, 2, 3];
console.log(unique(data)); // [1, 2, 3]