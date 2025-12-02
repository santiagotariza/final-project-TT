import { obtenerCarrito } from "./storage";
import { agregarAlCarrito } from "./funcionesCarrito";
import { mostrarMensaje } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtenerCarrito()
    actualizarContador(carrito);
    fetch('./data/productos.json').then(res => {
        if(!res.ok) {
            throw new Error('Error al cargar los productos - ${res.status}');
        }
    })
    .then(data => {
        //Hacer todo el rendering de tarjetas con el for

    })
    .catch(err => console.log(err));
});