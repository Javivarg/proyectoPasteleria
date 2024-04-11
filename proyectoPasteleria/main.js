document.addEventListener('DOMContentLoaded', function() {
    const precioButtons = document.querySelectorAll('.precio-btn');
    const listaProductos = document.getElementById('listaProductos');
    const precioTotalElement = document.getElementById('precioTotal');
    const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');
    let carrito = cargarCarritoDesdeURL() || {};

    // Cargar productos del carrito cuando la página se carga
    actualizarVentanaEmergente();

    precioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const precio = parseFloat(this.getAttribute('data-precio'));
            const productoNombre = this.parentElement.querySelector('.card-title').textContent;

            if (carrito[productoNombre]) {
                carrito[productoNombre].cantidad++;
            } else {
                carrito[productoNombre] = {
                    precio: precio,
                    cantidad: 1
                };
            }

            actualizarVentanaEmergente();
            guardarCarritoEnURL(carrito);
            
            // Mostrar una alerta
            alert(`¡${productoNombre} agregado al carrito!`);
        });
    });

    vaciarCarritoBtn.addEventListener('click', function() {
        carrito = {};
        actualizarVentanaEmergente();
        guardarCarritoEnURL(carrito);
    });

    function actualizarVentanaEmergente() {
        listaProductos.innerHTML = '';
        let total = 0;

        for (const productoNombre in carrito) {
            const producto = carrito[productoNombre];
            const listItem = document.createElement('li');
            listItem.textContent = `${productoNombre} x ${producto.cantidad}: $${(producto.precio * producto.cantidad).toFixed(2)}`;
            listaProductos.appendChild(listItem);
            total += producto.precio * producto.cantidad;
        }

        precioTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Almacenar el carrito en la URL
    function guardarCarritoEnURL(carrito) {
        const carritoString = JSON.stringify(carrito);
        const carritoEncoded = encodeURIComponent(carritoString);
        const nuevaURL = `?carrito=${carritoEncoded}`;
        window.history.replaceState({}, document.title, nuevaURL);
    }

    // Cargar el carrito desde la URL
    function cargarCarritoDesdeURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const carritoEncoded = urlParams.get('carrito');
        if (carritoEncoded) {
            const carritoString = decodeURIComponent(carritoEncoded);
            return JSON.parse(carritoString);
        }
        return null;
    }

});
