let monitor = 100;
let cpu = 120;
let memoria = 350;


//suma
let precioTotal = monitor + cpu + memoria;
console.log("Precio Total: ", precioTotal);

let adicionales = 50 + 10;
console.log("Adicionales:  ", adicionales);

//resta
let descuento = 25;
let precioConDscto = precioTotal - descuento;
console.log("Precio cond Dscto: ", precioConDscto);

//dividir en cuotas
let cuotas = precioConDscto /2;
console.log("Con cuotas es: ", cuotas);

//Multiplicar
let totalPorTres = precioConDscto * 3;
console.log("Precio por tres unidades: ", totalPorTres);

//Variable

let numero1 =10;
let i=1;
console.log(numero1++);
console.log(numero1++);
console.log(++numero1);

////////////////////////////////////
let numero2 = "20";
let numero3 = "30";

let suma = parseInt(numero2) + parseInt(numero3);
console.log("la suma es: ",suma);

let anio = 2025;
console.log("El anio es: ", anio.toString());