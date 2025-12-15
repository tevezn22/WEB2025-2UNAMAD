// ===========================================
// 1. BASE DE DATOS
// ===========================================
let productos = [
    {
        imagen: "https:images.unsplash.com/photo-1637412173653-de70428ee3ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RvcyUyMGRlJTIwdGVjbm9sb2dpYXxlbnwwfHwwfHx8MA%3D%3D",
        nombre: "Reloj inteligente",
        precio: 800.99,
        descripcion: "Reloj inteligente de la marca Apple."
    },
    {
        imagen: "https://plus.unsplash.com/premium_photo-1684512989514-f0e4db5cc44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdG9zJTIwZGUlMjB0ZWNub2xvZ2lhfGVufDB8fDB8fHww",
        nombre: "Laptop Lenovo",
        precio: 1500.50,
        descripcion: "Laptop Lenovo Intel I11 décima cuarta Generación."
    },
    {
        imagen: "https://images.unsplash.com/photo-1636614178501-e03f25a87516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3RvcyUyMGRlJTIwdGVjbm9sb2dpYXxlbnwwfHwwfHx8MA%3D%3D",
        nombre: "Tablet Apple",
        precio: 2500.00,
        descripcion: "Tablet de Apple con memoria SDC max 3.88Ghz."
    },
    {
        imagen: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8emFwYXRpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
        nombre: "Zapatillas New Balance",
        precio: 349.99,
        descripcion: "Zapatillas acolchonadas New Balance."
    },
    {
        imagen: "https://images.unsplash.com/photo-1579446650032-86effeeb3389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8emFwYXRpbGxhc3xlbnwwfHwwfHx8MA%3D%3D",
        nombre: "Zapatillas Nike",
        precio: 335.00,
        descripcion: "Zapatillas de la marca Nike, especialmente para maratones."
    },
    {
        imagen: "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        nombre: "Caja de Chocolate",
        precio: 49.99,
        descripcion: "Caja de Chocolate especial para tu flaca."
    },
    {
        imagen: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1bGNlc3xlbnwwfHwwfHx8MA%3D%3D",
        nombre: "Torta de Chantillí",
        precio: 45.00,
        descripcion: "Torta de Chantillí adornado con frutos secos."
    },
    {
        imagen: "https://images.unsplash.com/photo-1519869325930-281384150729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1bGNlc3xlbnwwfHwwfHx8MA%3D%3D",
        nombre: "CupCakes",
        precio: 18.50,
        descripcion: "CupCakes de fresa."
    }
];


let tarjetasDiv;
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function Card(imagen, nombre, precio, descripcion) {
    let columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-lg-4");

    columna.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${imagen}" class="card-img-top" style="height:200px; object-fit:cover;">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text flex-grow-1">${descripcion}</p>
                <p class="card-text fw-bold">S/. ${precio.toFixed(2)}</p>
                <button class="btn btn-primary mt-auto btn-agregar">Agregar</button>
            </div>
        </div>
    `;
    return columna;
}

function dibujarCards(){
    
    tarjetasDiv.innerHTML = "";
    
    productos.forEach(function (item){
        let revision = Card(item.imagen, item.nombre, item.precio, item.descripcion)
        tarjetasDiv.appendChild(revision);
    })
}

function agregarAlCarrito(producto) {
    let existe = carrito.find(p => p.nombre === producto.nombre);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            imagen: producto.imagen,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito();
    mostrarCarrito();
}

function mostrarCarrito() {
  
    const resumen = document.getElementById("resumen");
    const totalPagar = document.getElementById("total-pagar");

    resumen.innerHTML = "";
    
    let total = 0;

    carrito.forEach(item => {
        let fila = document.createElement("div");
        fila.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2");
        
        fila.innerHTML = `
            <div class="d-flex gap-2 align-items-center">
                <img src="${item.imagen}" width="50" height="50" style="object-fit:cover; border-radius:5px;">
                <div>
                    <p class="m-0 fw-bold">${item.nombre}</p>
                    <small>Cantidad: ${item.cantidad}</small>
                </div>
            </div>
            <div>
                S/. ${(item.precio * item.cantidad).toFixed(2)}
            </div>
        `;

        resumen.appendChild(fila);

        total += item.precio * item.cantidad;
    });

    totalPagar.textContent = "Total a pagar: S/. " + total.toFixed(2);
}


document.addEventListener('DOMContentLoaded', () => {
   
    tarjetasDiv = document.querySelector("#tarjetas"); 
    
    dibujarCards();
    mostrarCarrito(); 
});



document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-agregar")) {
        
        let cardDiv = e.target.closest(".card-body");
        let card = e.target.closest(".card");

        let producto = {
            imagen: card.querySelector("img").src,
            nombre: cardDiv.querySelector(".card-title").textContent,
            descripcion: cardDiv.querySelectorAll(".card-text")[0].textContent, 
            precio: parseFloat(cardDiv.querySelectorAll(".card-text")[1].textContent.replace("S/. ", ""))
        };

        agregarAlCarrito(producto);
    }
});