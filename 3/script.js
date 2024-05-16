const form = document.getElementById('myForm');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
    });
});

form.addEventListener('submit', (e) => {
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            e.preventDefault();
        }
    });
});