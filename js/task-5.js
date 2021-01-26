const nameInput = document.querySelector('input');
const nameOutput = document.querySelector('#name-output');

// const changeName = () => nameInput.value !== '' ? nameOutput.textContent = nameInput.value : nameOutput.textContent = 'незнакомец';
const changeName = () => nameOutput.textContent = !nameInput.value ? nameInput.value : 'незнакомец';

nameInput.addEventListener('input', changeName);