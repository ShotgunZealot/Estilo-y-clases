document.addEventListener('DOMContentLoaded', function () {
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const container = document.querySelector('.container');

    lightThemeBtn.addEventListener('click', function () {
        container.classList.remove('theme-dark');
    });

    darkThemeBtn.addEventListener('click', function () {
        container.classList.add('theme-dark');
    });
});
