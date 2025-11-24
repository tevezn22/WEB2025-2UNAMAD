// 6. Comparar Triángulos


let base1 = Number(prompt("Base del triángulo 1:"));
let altura1 = Number(prompt("Altura del triángulo 1:"));
let area1 = (base1 * altura1) / 2;
console.log(`Área del Triángulo 1: ${area1}`);


let base2 = Number(prompt("Base del triángulo 2:"));
let altura2 = Number(prompt("Altura del triángulo 2:"));
let area2 = (base2 * altura2) / 2;
console.log(`Área del Triángulo 2: ${area2}`);


if (area1 > area2) {
    console.log("El primer triángulo es más grande");
} else if (area2 > area1) {
    console.log("El segundo triángulo es más grande");
} else {
    console.log("Ambos triángulos son iguales.");
}