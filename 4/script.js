document.addEventListener('DOMContentLoaded', function () {
    const miniaturas = document.querySelectorAll('.miniatura');
    const imagenActual = document.querySelector('.imagen-actual img');

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function () {
            const nuevaFuente = miniatura.src;
            imagenActual.src = nuevaFuente;

            miniaturas.forEach(miniatura => {
                miniatura.classList.remove('activa');
            });

            this.classList.add('activa');
        });
    });
});
