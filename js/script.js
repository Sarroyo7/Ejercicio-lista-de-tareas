let agregar = document.getElementById("agregar");
let eliminarTodo = document.getElementById("eliminarTodo");
let eliminar = document.getElementById("eliminar");
let vacio = document.querySelector('h2');

const contenidos = new Array();
contenidos.push("Tarea 1");
contenidos.push("Tarea 2");
contenidos.push("Tarea 3");
contenidos.push("Tarea 4");
contenidos.push("Tarea 5");
contenidos.push("Tarea 6");
contenidos.push("Tarea 7");
contenidos.push("Tarea 8");

let contador = 0;

//Funcion para agregar tareas
agregar.addEventListener('click', function() {

    if (contador >= 10) {
        alert("El limite de tareas ha sido alcanzado.");
    } else {
        vacio.style.display = 'none';
        var num = Math.floor(Math.random()*contenidos.length);
        var contenedor = document.createElement('div');
        var texto = document.createElement('p');
        let mainContainer = document.getElementById("mainContainer");
        
        contenedor.classList.add("contenedor");
        texto.innerHTML = contenidos[num];

        mainContainer.insertBefore(contenedor, mainContainer.firstElementChild);
        contenedor.appendChild(texto);

        contador++;

        //Agregar el boton de eliminar
        var eliminar = document.createElement('img');
        //Le doy una clase de nombre "eliminar" a el objeto img
        eliminar.id = "eliminar";
        //Añado la ruta de la imagen a el nodo previamente creado "img"
        eliminar.src = 'img/eliminar.png';
        //Lo introduzco como hijo al contenedor
        contenedor.appendChild(eliminar);


//Funcion para eliminar todas las tareas
eliminarTodo.addEventListener('click', function() {
        let tareas = document.querySelectorAll('.contenedor');
        
    tareas.forEach(function(tarea) {
        tarea.remove();
    });
        
    contador = 0;
    vacio.style.display = 'inline';
        
    // Esto muestra el elemento de nombre "vacio" cuando se hayan eliminado todas las tareas
    vacio.classList.remove('oculto');
});
        
        
//Funcion para eliminar tareas individualmente
eliminar.addEventListener('click', function(){
    console.log("asdasd");
    mainContainer.removeChild(contenedor);
    contador--;

    if (contador == 0) {
        vacio.style.display = 'inline';
    }
        });// Cierre de la funcion eliminar
    }// Cierre del else
});// Cierre de la funcion agregar








 
