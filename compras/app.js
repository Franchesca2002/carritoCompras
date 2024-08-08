document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    cargarCarrito();
});

function agregarAlCarrito(event) {
    const boton = event.target;
    const producto = boton.closest('.Producto');
    const nombre = producto.querySelector('h3').textContent;
    const precio = producto.querySelector('p').textContent;

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({ nombre, precio });

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${nombre} ha sido agregado al carrito`);
}

function cargarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.forEach(item => {
        console.log(`Producto: ${item.nombre}, Precio: ${item.precio}`);
    });
}