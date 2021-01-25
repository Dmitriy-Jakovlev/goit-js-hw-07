const nameInput = document.querySelector('input');
const nameOutput = document.querySelector('#name-output');

const changeName = () => nameInput.value !== '' ? nameOutput.textContent = nameInput.value : nameOutput.textContent = 'незнакомец';

nameInput.addEventListener('input', changeName);