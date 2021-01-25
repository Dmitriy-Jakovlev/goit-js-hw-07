const idInput = document.querySelector('#validation-input');
const inputLength = Number(idInput.getAttribute('data-length'));
const addClass = idInput.classList;

const changeColor = () => {
    idInput.value.length === inputLength 
    ? idInput.classList.add('valid') 
    : idInput.classList.add('invalid');
}

const removeColor = () => {
    if(addClass.value !== '') {
        idInput.classList.remove(addClass.value);
    }
}

idInput.addEventListener('blur' , changeColor);
idInput.addEventListener('focus' , removeColor);