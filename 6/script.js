document.addEventListener('DOMContentLoaded', function () {
    const botonMenu = document.querySelector('.menu-boton');
    const listaMenu = document.querySelector('.menu-lista');
    
    botonMenu.addEventListener('click', function () {
        listaMenu.classList.toggle('active');
    });
});
