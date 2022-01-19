let a = prompt('Enter number');
let b = prompt('Enter number');
let c = prompt('Enter number');

if ((a > b && a < c) || (a < b && a > c)) {
    alert(` ${a} is midle`);
} else if ((b > a && b < c) || (b < a && b > c)) {
    alert(` ${b} is midle`);
} else if ((c > a && c < b) || (c < a && c > b)) {
    alert(` ${c} is midle`);
} else {
    alert(` There is not midle number`);
}