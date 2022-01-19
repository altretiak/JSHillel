let userName;
console.log(userName, "userName");
do {
    userName = prompt("Привет! Как тебя зовут?");

} while (userName == "");

if (userName == null) {
    alert('good bay');
} else {


    alert(`${userName}, попробуй угадать чисто от 1 до 100`);

    const RANDOM_NUMBER = '42';

    let userNumber = prompt('Введите число');

    // if (userNumber > RANDOM_NUMBER) {
    //     alert("more than");
    // } else if (userNumber < RANDOM_NUMBER) {
    //     alert("less than");
    // } else {
    //     alert("You are right!");
    // }
    while (userNumber !== RANDOM_NUMBER) {
        if (userNumber > RANDOM_NUMBER) {
            alert("it's more");
            userNumber = prompt('Введите число');
        } else if (userNumber < RANDOM_NUMBER) {
            alert("it's less");
            userNumber = prompt('Введите число');
        }
    }

    alert("You are right");
}