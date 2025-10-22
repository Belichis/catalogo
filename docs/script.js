// --- Lista de productos ---
const productos = [
    {
        nombre: 'Televisor LG Smart TV 38"',
        descripcion: 'Televisor de 50 pulgadas con resolución 4K.',
        precio: 599.99,
        imagen: 'img1.jpg'
    },
    {
        nombre: 'Samsung Smart TV 55"',
        descripcion: 'Televisor de última generación con excelente definición.',
        precio: 899.99,
        imagen: 'img2.jpg'
    },
    {
        nombre: 'Televisión pantalla 24" JVC',
        descripcion: 'Pantalla ideal para espacios pequeños y buena calidad de imagen.',
        precio: 1200.00,
        imagen: 'img3.jpg'
    },
    {
        nombre: 'Televisor de colección 36" GE',
        descripcion: 'Diseño retro con sonido de alta fidelidad.',
        precio: 149.99,
        imagen: 'img4.jpg'
    }
];

// --- Contenedor principal ---
const catalogo = document.getElementById('catalogo');

// --- Función para crear cada tarjeta ---
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';

    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';

    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);

    return card;
}

// --- Función para renderizar todo el catálogo ---
function renderizarCatalogo() {
    productos.forEach(producto => {
        const tarjeta = crearTarjetaProducto(producto);
        catalogo.appendChild(tarjeta);
    });
}

// --- Cargar al iniciar la página ---
window.onload = renderizarCatalogo;