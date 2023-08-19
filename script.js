// script.js

const changeContentButton = document.getElementById('changeContent');
const mainContent = document.querySelector('main p');

changeContentButton.addEventListener('click', () => {
    mainContent.textContent = 'Content has been changed dynamically!';
});
