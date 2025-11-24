// 4. Dividir cuenta
let totalCuenta = prompt("Ingresa el monto total a pagar:");
totalCuenta = Number(totalCuenta); 

let pagoPorPersona = totalCuenta / 3;


alert(`Cada amigo debe pagar: ${pagoPorPersona.toFixed(2)} `);