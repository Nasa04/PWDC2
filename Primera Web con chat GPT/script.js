document.addEventListener('DOMContentLoaded', function () {
    const productos = document.querySelectorAll('.ver-detalle');

    productos.forEach(producto => {
        producto.addEventListener('click', function () {
            alert(`Detalles del producto: ${this.parentNode.querySelector('h3').innerText}`);
        });
    });

    const enlaceFormulario = document.querySelector('#contactanos');

    enlaceFormulario.addEventListener('click', function (event) {
        event.preventDefault();
        // Redirigir al formulario en otra página
        window.location.href = 'formulario.html';
    });
});
