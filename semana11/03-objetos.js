let productos = [
    {nombre: "Iphone 17", precio: 4500},
    {nombre: "Laptop Gamer", precio: 8500},
    {nombre: "Mouse optico", precio: 80},
    {nombre: "Pack Mouse", precio: 10},
    {nombre: "Cooler para Laptop", precio: 250},
    {nombre: "Funda protectora", precio: 150},
    {nombre: "Switch Core", precio: 6500},
    {nombre: "Memoria de 32GB", precio: 250},
    {nombre: "Procesador Core I7", precio: 550},
    {nombre: "Disco duro", precio: 350},
]

// MAP
let prodIncrementoPrecio = productos.map((preProd) => {
    let precioFinal = preProd.precio * 1.20;
    return precioFinal;
});

console.log("Los precios finales son: ", prodIncrementoPrecio);

// FILTER
let prodCaros = productos.filter((filterProd) => {
    return filterProd.precio > 799;
});

console.log("Los articulos que valen mas de 800: ", prodCaros);