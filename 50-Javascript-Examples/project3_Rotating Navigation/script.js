const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

//Very straightforward, add an event listener so that on click we add or remove class depending on the options available.
open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'))