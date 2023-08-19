// script.js

// Function to change the content of the main area
function changeMainContent() {
    const mainContent = document.querySelector('main p');
    mainContent.textContent = 'Content has been changed dynamically!';
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Function to display an alert
function showAlert() {
    alert('This is an alert!');
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const changeContentButton = document.getElementById('changeContent');
    const toggleDarkModeButton = document.getElementById('toggleDarkMode');
    const showAlertButton = document.getElementById('showAlert');

    changeContentButton.addEventListener('click', changeMainContent);
    toggleDarkModeButton.addEventListener('click', toggleDarkMode);
    showAlertButton.addEventListener('click', showAlert);
});
