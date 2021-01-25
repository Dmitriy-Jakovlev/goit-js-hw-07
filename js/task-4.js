const decBtn = document.querySelector('[data-action = "decrement"]');
const incBtn = document.querySelector('[data-action = "increment"]');
const number = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    return number.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    return number.textContent = counterValue;
}

incBtn.addEventListener('click' , increment);
decBtn.addEventListener('click' , decrement);