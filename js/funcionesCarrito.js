import { guardarCarrito, obtenerCarrito, vaciarCarrito } from "./storage";
import { actualizarContador, mostrarMensaje } from "./ui";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje(`Se ha agregado ${producto.nombre} al carrito.`);
};

export const eliminarDelCarrito = (id) => {
    const carrito = obtenerCarrito();
    carrito.splice(id, 1);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado del carrito.");
};

export const vaciarCarrito = () => {
    vaciarCarrito();
    actualizarContador([]);
    mostrarMensaje("El carrito ha sido vaciado.");
};