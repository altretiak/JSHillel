const compact = (array) => {
    console.log(array);
    array = array.filter(i => [0, false, undefined, '', null].includes(!i));
    console.log(array);
    return array;
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)); // [1, 2, 3]