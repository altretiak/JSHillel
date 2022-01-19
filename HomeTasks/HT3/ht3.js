let a = prompt('Enter number');
let b = prompt('Enter number');
let c = prompt('Enter number');

if (a > b && a > c) {
    alert(` ${a} is max`);
} else if (b > a && b > c) {
    alert(` ${b} is max`)
} else {
    alert(` ${c} is max`)
}