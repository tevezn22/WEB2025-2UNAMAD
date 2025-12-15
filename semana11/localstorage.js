

//funcion de agregar tarea

function agregartarea (tarea){
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    tareas.push(tarea);

    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrartarea() {
    const  tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    console.log("Lista de tareas");
    tareas.forEach((tarea , index) =>{
        console.log(` ${index + 1}. ${tarea}`)
        
    }); 
}

agregartarea("Apreder Js");
agregartarea("Practicar html y css")
agregartarea("estudiar loclastore")
agregartarea("Entender mas algoritmos")

mostrartarea();
