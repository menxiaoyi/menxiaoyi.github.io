// script.js

document.getElementById('open-button').addEventListener('click', function() {
    document.getElementById('nav-container').classList.add('active');
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('nav-container').classList.remove('active');
});
