const inputElement = document.getElementById('miInput');
const botonesContenedor = document.getElementById('listaBotones');
let miArray = [];

function agregarElemento() {
    const valor = inputElement.value.trim();
    
    if (valor !== '') {
        miArray.push(valor); // Añadir al array
        inputElement.value = ''; // Limpiar input
        renderizarBotones(); // Actualizar la vista
    }

    document.querySelector("#res").innerHTML= miArray[i];
    contenedor.appendChild(boton);
}

// Asignar evento al botón de agregar
document.getElementById('btnAgregar').addEventListener('click', agregarElemento);   



//borrar
function renderizarBotones() {
    botonesContenedor.innerHTML = ''; // Limpiar lista anterior

    miArray.forEach((elemento , index) => {
        const btn = document.createElement('button');
        btn.textContent = `Borrar: ${elemento}`;
         
        
        // Asignar evento de borrado usando el índice actual
        btn.addEventListener('click', () => {
            eliminarElemento(index);
        });

        botonesContenedor.appendChild(btn);
    });
}

function eliminarElemento(index) {
    miArray.splice(index, 1); // Eliminar del array
    renderizarBotones(); // Re-renderizar para actualizar índices y vista
}   


// 1. Crear el elemento botón
const boton = document.createElement("button");
//2. Configurar propiedades
boton.type = "button";
boton.innerText = "Haz Click";
boton.id = "miBoton";

// 3. Agregar evento click (opcional)
boton.addEventListener('click', function() {
  
  alert("Botón presionado");
});

// 4. Insertar en el documento (ej: en el body o un contenedor específico)
//document.body.appendChild(boton);
 let contenedor = document.getElementById("res");


/*
let serieA = {
  nombre: "Los simpsons",
  categoria: "Entretenimiento",
  actores: ["Homero", "Lisa"],
};

let serieB = {
  nombre: "Los simpsons",
  categoria: "Entretenimiento",
  actores: ["Homero", "Lisa"],
};

let series = [serieA, serieB];

// esta es la función principal que recorre las series
// y crea los elementos principales
function pintarSeries() {
  // se limpia el contenedor cada vez que se pintan las series
  document.getElementById("contenido").innerHTML = "";
  
  
  series.forEach((serie, index) => {
  
    let ulElement = document.createElement("ul");

    let liElement = document.createElement("li");
    liElement.innerText = serie.nombre;

    let botonEliminar = document.createElement("button");
    botonEliminar.onclick = () => {
      // al eliminar se remueve el elemento 
      // del arreglo de series en el indice actual
      series.splice(index, 1);
      // luego se remueve el elemento html
      ulElement.remove();
      // se vuelven a pintar las series
      pintarSeries();
    };

    botonEliminar.innerText = "eliminar";

    liElement.appendChild(botonEliminar);

    let ulInterno = document.createElement("ul");

    agregarActores(ulInterno, serie.actores);
    liElement.appendChild(ulInterno);

    ulElement.appendChild(liElement);
    
    
    // agregar al contenedor la lista de series
    document.getElementById("contenido").appendChild(ulElement);
  });
}

function agregarActores(ulElement, actores) {
  // iterar la lista de actores
  actores.forEach((actor, index) => {
    // crear un elemento de la lista li
    let liElement = document.createElement("li");
    
    // agregar un elemento de texto al li
    // que contiene el nombre del actor
    liElement.appendChild(document.createTextNode(actor));

    // crear el botón que servirá para eliminar el actor
    let botonEliminar = document.createElement("button");
    // agregarle un texto al botón
    botonEliminar.appendChild(document.createTextNode("eliminar"));
    // agregar la función que se ejecutará cuando se presione
    // el botón
    botonEliminar.onclick = () => {
      // se remueve el elemento del arreglo de actores
      // se remueve el elemento html
      // y se pinta de nuevo la lista
      liElement.remove();
      actores.splice(index, 1);
      pintarSeries();
    };

    // agregar botón al li
    liElement.appendChild(botonEliminar);
    // agregar el li al ul
    ulElement.appendChild(liElement);
  });
}

pintarSeries();  */ 