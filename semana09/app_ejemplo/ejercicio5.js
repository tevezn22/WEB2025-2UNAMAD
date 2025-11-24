// 5. Cadena corta y larga
let textoa = prompt("Ingresa la primera palabra:");
let textob = prompt("Ingresa la segunda palabra:");

let resultado;


if (textoa.length < textob.length) {
    
    resultado = textoa + textob + textoa;
} else {
    
    resultado = textob + textoa + textob;
}

alert("Resultado combinado: " + resultado);