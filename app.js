const button = document.querySelector('.button');

const dice = document.querySelector('.dice-3');
console.log(dice);

function changeDice(dice) {
    dice.className = `dice dice-${Math.ceil(Math.random() * 6)}`;
    console.log(dice.className);
}

button.addEventListener('click', () => changeDice(dice));
