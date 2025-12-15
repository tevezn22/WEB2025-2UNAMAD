let platos = ["Lomo Saltado", "Pachamama","Filete de Paicha","Ceviche", "Aji de Gallina"];
let platosJSON = JSON.stringify(platos);

localStorage.setItem("PlatosJSON", platosJSON);

let data = localStorage.getItem("PlatosJSON");
console.log("data",data);

const usuario ={
    nombre: "lucy",
    email:"lucu@unamad.edu.pe"
}

localStorage.setItem("usuario",JSON.stringify(usuario));