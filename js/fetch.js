//URL del Api
const API_URL = "http://jsonplaceholder.typicode.com";

//utilizar elementos de HTM
//En este apartado con NODOS del DOM 

const HTMLRespons = document.querySelector("#contenedor");

//Elemeto
const ul = document.createElement('ul');


fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        //bucle forech -- Por cada usuario queremos que haca =>
        users.forEach(user => {                 //que serà un nodo de tipo <li>
            let element = document.createElement("li");
            element.appendChild(document.createTextNode(` Nombre:  ${user.name}  Correo:   ${user.email}`)
            );
            //cada que agregemos los hijos li van a ser hijos de ul
            ul.appendChild(element);
        });


        //Nodo raíz y le agregamos el hijo con todos los datos
        HTMLRespons.appendChild(ul);
    });





//Otra forma
/*
const HTMLRespons = document.querySelector("#contenedor");
//esto devuelve una promesa
//el resultado de la promesa lo tomamos con
fetch(`${API_URL}/users`).then((response) => response.json())
    .then((users) => {
        const Template = users.map((user) => `<li> ${user.name} @ ${user.email}</li>`);
        HTMLRespons.innerHTML = `<ul> ${Template} </ul>`;
    });
*/






// Tarea obtener el id de cada empleado y el titulo con tienen con
// XMLHttpRequest();
























































/*
Solucion

//utilizar elementos de HTM
//En este apartado con NODOS del DOM 

const HTMLRespons = document.querySelector("#contenedor");


const ul = document.createElement('ul');


fetch(`${API_URL}/todos`)
    .then((response) => response.json())
    .then((todos) => {
        //bucle forech -- Por cada usuario queremos que haca =>
        users.forEach(todos => {                 //que serà un nodo de tipo <li>
            let element = document.createElement("li");
            element.appendChild(document.createTextNode(` id:  ${todos.id}  Correo:   ${todos.title}`)
            );
            //cada que agregemos los hijos li van a ser hijos de ul
            ul.appendChild(element);
        });


        //Nodo raíz y le agregamos el hijo con todos los datos
        HTMLRespons.appendChild(ul);
    });
*/