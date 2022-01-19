let b = 7;
let c;
let d = '';

for (let i = 1; i <= 10; i++) {
    c = b * i;
    d = d + (b + '*' + i + '=' + c) + '\n';
}
alert(d);