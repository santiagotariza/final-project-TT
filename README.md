# 🧸 Tienda de Peluches - IKEA Fan Shop

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Este proyecto es el trabajo final para el curso de **Talento Tech - Desarrollo Front-End con JavaScript**. Consiste en una simulación de e-commerce (SPA) temática de peluches de IKEA, donde se implementan conceptos fundamentales de manipulación del DOM, asincronía y persistencia de datos.

## 🚀 Demo
Puedes ver el proyecto desplegado aquí:
**https://santiagotariza.github.io/final-project-TT/**

## 📋 Características

El sitio web cuenta con las siguientes funcionalidades:

* **Renderizado Dinámico:** Los productos se cargan dinámicamente en el DOM consumiendo un archivo JSON local (`fetch`).
* **Carrito de Compras:**
    * Agregar productos desde el catálogo.
    * Ver listado de productos seleccionados.
    * Eliminar productos individuales.
    * Vaciar el carrito completo.
    * Persistencia de datos mediante **LocalStorage** (el carrito no se borra al recargar).
* **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio (Mobile First / Flexbox).
* **Formulario de Contacto:** Integración funcional con **Formspree** para envío de correos.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Estilos personalizados, Flexbox, variables y diseño responsivo.
* **JavaScript (ES6+):**
    * Módulos (`import`/`export`).
    * Fetch API & Promesas.
    * DOM Manipulation.
    * Local Storage.
    * JSON.

## 📂 Estructura del Proyecto

```text
├── css/
│   └── style.css          # Estilos globales y responsivos
├── data/
│   └── productos.json     # "Base de datos" de los productos
├── img/
│   ├── ikea.svg           # Logos e imágenes estáticas
│   └── ... (imágenes de productos)
├── js/
│   ├── carrito.js         # Lógica específica de la página del carrito
│   ├── funcionesCarrito.js# Funciones reutilizables (agregar, eliminar, vaciar)
│   ├── index.js           # Lógica de la página principal (fetch y renderizado)
│   ├── storage.js         # Manejo del LocalStorage
│   └── ui.js              # Actualización de interfaz (contadores, alertas)
├── pages/
│   ├── carrito.html       # Vista del carrito
│   └── contacto.html      # Formulario de contacto
├── index_legacy.html      # Versión estática de la página de inicio (Inicial)
├── index.html             # Página de inicio (Catálogo)
└── README.md              # Documentación
