import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {

    if (!producto) return;

    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    

    mostrarMensaje(`Se ha agregado ${producto.nombre} al carrito.`);
};

export const eliminarDelCarrito = (index) => {
    const carrito = obtenerCarrito();
    carrito.splice(index, 1); 
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado del carrito.");
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage(); 
    actualizarContador([]);
    mostrarMensaje("El carrito ha sido vaciado.");
};