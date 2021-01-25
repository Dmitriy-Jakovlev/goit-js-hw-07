const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.value = '24';
// text.style.fontSize = `${fontSizeControl.value}px`;
const FontChange = () => text.style.fontSize = fontSizeControl.value + 'px';

fontSizeControl.addEventListener('input' , FontChange);