let albumMusical = {
    grupo: "grupo 5",
    nombre: "El ritmo de mi corazon",
    fecha: "30/02/2013", 
    generos: ["cumbia", "salsa"], 
    canciones: [
        {
        titulo: "el ritmo de mi corazon",
        duracion: 3.43,
        autores:["Gian Marco", "Dante Cardoza"],
    },
    {
        titulo: "la cumbia del amor",
        duracion: 4.05,
        autores:["Juan Gabriel","tevezn"],
    },
    {
        titulo: "salsa pa gozar",   
        duracion: 5.00,
        autores:["Marc Anthony", "Gilberto Santa Rosa"],
    }
    ],
    produccion: {
        arreglos:"Elmer Yaipen", "productor":"Carlos Vives"
    }
    
};

console.log(albumMusical.produccion.arreglos[0]);
