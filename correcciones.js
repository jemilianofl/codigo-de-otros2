// Se usa mejor el ID del elemento para accesar de mejor manera
const formulario = document.getElementById("formulario"); 

// Se moficia la variable e por event para hacerla descriptiva
formulario.onsubmit = function (event) {
    // Se modifica el metodo prevent por preventDefault
    event.preventDefault(); 

    // Además de hacer mas descriptivas las variables se optimiza el codigo
    const nombre = document.getElementById("name").value;
    const edad = parseInt(document.getElementById("age").value);
    const nacionalidadSelect = document.getElementById("nationality");
    const nacionalidad = nacionalidadSelect.value;

    // Se valida que no este vacio el nombre
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Se valida que no este vacia la edad o que no exceda los limtes, si hay algun error con return se detiene la ejecucion
    if (isNaN(edad) || edad < 18 || edad > 120) {
        alert("Por favor, ingresa una edad válida (entre 18 y 120 años).");
        return;
    }   

    // Se almacenan las nacionalidades en un objeto
    const nacionalidades = {
        "ar": "Argentina",
        "mx": "Mexicana",
        "vnzl": "Venezolana",
        "per": "Peruana"
    };
    // En caso de no existir la nacionalidad se muestra desconocida
    const nacionalidadTexto = nacionalidades[nacionalidad] || "Desconocida";

    // Para no usar multiples createElement se usa una función genérica que accese a estos, con innerHTML simplificamos la estructura
    function crearElemento(descripcion, valor) {
        const contenedor = document.createElement("p");
        contenedor.innerHTML = `<strong>${descripcion}:</strong> ${valor}`;
        return contenedor;
    }

    // Se creo el div que actuara de contenedor de la informacion
    const elementoLista = document.createElement("div");
    // Se le agrega la clase del CSS solo para estilizar
    elementoLista.classList.add("elemento-lista");

    elementoLista.appendChild(crearElemento("Nombre", nombre));
    elementoLista.appendChild(crearElemento("Edad", edad));
    elementoLista.appendChild(crearElemento("Nacionalidad", nacionalidadTexto));

    // Se accede al boton, ademas de asignarle un texto, estilo y un evento
    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar invitado";
    botonBorrar.classList.add("boton-borrar");
    botonBorrar.onclick = () => elementoLista.remove();

    elementoLista.appendChild(botonBorrar);
    // Se asegura que el nuevo elemento se agregue a la lista
    document.getElementById("lista-invitados").appendChild(elementoLista);
};
