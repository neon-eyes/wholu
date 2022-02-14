'use strict';

const logInBtn = document.querySelector('.login-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close');

logInBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
