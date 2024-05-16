document.addEventListener('DOMContentLoaded', function () {
    const mostrarSeccion1Btn = document.getElementById('mostrar-seccion1');
    const ocultarSeccion1Btn = document.getElementById('ocultar-seccion1');
    const mostrarSeccion2Btn = document.getElementById('mostrar-seccion2');
    const ocultarSeccion2Btn = document.getElementById('ocultar-seccion2');

    const seccion1 = document.getElementById('seccion1');
    const seccion2 = document.getElementById('seccion2');

    mostrarSeccion1Btn.addEventListener('click', function () {
        seccion1.style.display = 'block';
    });

    ocultarSeccion1Btn.addEventListener('click', function () {
        seccion1.style.display = 'none';
    });

    mostrarSeccion2Btn.addEventListener('click', function () {
        seccion2.style.display = 'block';
    });

    ocultarSeccion2Btn.addEventListener('click', function () {
        seccion2.style.display = 'none';
    });
});
