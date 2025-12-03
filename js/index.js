/* Archivo: index.js */
import { obtenerCarrito } from "./storage.js";
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { actualizarContador} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    fetch('./data/productos.json') 
    .then(res => {
        if(!res.ok) {
            throw new Error(`Error al cargar los productos - ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        data.forEach(producto => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("card");


            tarjeta.innerHTML = `
                <h3>${producto.nombre}</h3>
                <img src="${producto.img}" alt="${producto.nombre}" />
                
                <p class="descripcion">${producto.descripcion}</p>
                
                <p class="precio">$${producto.precio}</p>
                
                <button class="btn agregar-btn">Agregar al carrito</button>
            `;

            const boton = tarjeta.querySelector(".agregar-btn");
            
            boton.addEventListener("click", () => {
                agregarAlCarrito(producto);

            });

            contenedor.appendChild(tarjeta);
        });
    })
    .catch(err => console.log(err));
});