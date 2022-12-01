const heading = document.querySelector(".heading");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstNumber = randomIntFromInterval(1,9);
let secondtNumber = randomIntFromInterval(1,9);
heading.textContent = `${firstNumber} * ${secondtNumber}`;

button.addEventListener("click", function(e) {
if (Number(input.value) === firstNumber * secondtNumber) {
    alert('Молодец,верно!');
    firstNumber = randomIntFromInterval(1,9);
    secondtNumber = randomIntFromInterval(1,9);
    heading.textContent = `${firstNumber} * ${secondtNumber}`;
} else {
    alert('Не угадал!');
}
input.value = '';
});
