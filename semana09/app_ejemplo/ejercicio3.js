
let monto = prompt("Ingresa el monto a pagar:");
monto = Number(monto); 

let impuesto = monto * 0.18;      
let precioFinal = monto + impuesto; 

console.log("Monto inicial: " + monto);
console.log("IGV : " + impuesto);
console.log("-------------------------");
console.log("TOTAL : " + precioFinal);