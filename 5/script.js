document.addEventListener('DOMContentLoaded', function () {
    const categoriaSelect = document.getElementById('categoria');
    const productoSelect = document.getElementById('producto');

    const productosPorCategoria = {
        frutas: ['Manzana', 'Banana', 'Naranja'],
        verduras: ['Lechuga', 'Tomate', 'Zanahoria'],
        carnes: ['Pollo', 'Res', 'Cerdo']
    };

    function actualizarProductos() {
        const categoriaSeleccionada = categoriaSelect.value;
        const productos = productosPorCategoria[categoriaSeleccionada];
        productoSelect.innerHTML = '';

        productos.forEach(producto => {
            const option = document.createElement('option');
            option.textContent = producto;
            option.value = producto;
            productoSelect.appendChild(option);
        });
    }

    categoriaSelect.addEventListener('change', function () {
        actualizarProductos();
    });

    actualizarProductos();
});
