/* Archivo: js/carrito.js */
import { eliminarDelCarrito, vaciarCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    
    const contenedorCarrito = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    if (!contenedorCarrito || !divAcciones) return;

    contenedorCarrito.innerHTML = "";
    divAcciones.innerHTML = "";

    if (carrito.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "El carrito está vacío 🥺";
        contenedorCarrito.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card-carrito");

        const img = document.createElement("img");
   
        const rutaImagen = producto.img.replace('./', '../');
        img.src = rutaImagen; 
        img.alt = producto.nombre;


        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;
        precio.classList.add("precio-carrito");

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-eliminar-carrito");
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            eliminarDelCarrito(index);
            renderizarCarrito();
        });
        
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(btnEliminar);
        contenedorCarrito.appendChild(tarjeta);
    });

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn", "btn-vaciar-carrito");
    btnVaciar.textContent = "Vaciar carrito";
    
    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });
    divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});