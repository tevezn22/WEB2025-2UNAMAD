


let productos = [50, 20, 10, 100, 30, 20];
let presupuesto = parseInt(prompt("Indique su presupuesto: "));
let gasto = 0;
let comprados = [];

for (let i = 0; i < productos.length; i++) {
    if (gasto + productos[i] <= presupuesto) {
        gasto += productos[i];
        comprados.push(productos[i]);
    }
}

console.log("Gasto total:", gasto);
console.log("Productos comprados:", comprados);


