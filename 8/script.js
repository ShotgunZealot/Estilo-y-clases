document.addEventListener('DOMContentLoaded', function () {
    const aumentarProgresoBtn = document.getElementById('aumentar-progreso');
    const barra = document.getElementById('barra');

    aumentarProgresoBtn.addEventListener('click', function () {
        aumentarProgreso();
    });

    function aumentarProgreso() {
        const anchoActualPx = parseFloat(getComputedStyle(barra).width);
        const anchoPadrePx = parseFloat(getComputedStyle(barra.parentElement).width);
        const anchoActualPorcentaje = (anchoActualPx / anchoPadrePx) * 100;

        const incremento = 10;

        const nuevoAnchoPorcentaje = Math.min(anchoActualPorcentaje + incremento, 100);
        barra.style.width = nuevoAnchoPorcentaje + '%';
    }
});
