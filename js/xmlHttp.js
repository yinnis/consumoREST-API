const API_URL = "http://jsonplaceholder.typicode.com";
//COMO SE HACIA ANTES?
//SE UTILIZABA EL OBJETO XMLHTTP REQUEST
//--->COMO SE HACIA?

//Constructor
const xhr = new XMLHttpRequest();

//MANEJADOR DE LA PETICION
function onRequestHandler() {
    //cuando se pide una peticion a jas devuelve una respuesta y un codigo de la respuesta
    //gracia a esto podemos saber si la peticion ha sido correcta, ha habido un error por 
    //parte del servidor o por parte de nosotros

    //ve si esta listo o no    //lo podemos ver con codigo de respuesta
    if (this.readyState === 4 && this.status === 200) {
        //hay 5 codigos

        // 0 => UNSET, no se ha llamado al metodo open
        // 1 => OPEN, se ha llamdo al metodo open del objeto (xhr)
        // 2 => HEADERS_RECEIVED, se esta llamando al metodo send()
        // 3 => LOADING, esta cargando, es decir esta recividiendo la respuesta.
        // 4 => DONE,se ha completado la operación.

        //si todo ha sido correcto
        // console.log(this.reponse);

        //tranformarlo en JSON parseandolo
        const data = JSON.parse(this.response);
        // console.log(data);
        //pintar API insertar la respuesta en formato HML
        const HTMLRespons = document.querySelector("#contenedor");

        const Template = data.map((user) => `<li> ${user.name} + ${user.email}</li>`);
        HTMLRespons.innerHTML = `<ul> ${Template} </ul>`




    }

}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/users`);
xhr.send();











// Tarea obtener el id de cada empleado y el titulo con tienen con
// XMLHttpRequest();
















































/*

Solucion



//Constructor
const xhr = new XMLHttpRequest();

//MANEJADOR DE LA PETICION
function onRequestHandler() {
    //cuando se pide una peticion a jas devuelve una respuesta y un codigo de la respuesta
    //gracia a esto podemos saber si la peticion ha sido correcta, ha habido un error por 
    //parte del servidor o por parte de nosotros

    //ve si esta listo o no    //lo podemos ver con codigo de respuesta
    if (this.readyState === 4 && this.status === 200) {
        //hay 5 codigos

        // 0 => UNSET, no se ha llamado al metodo open
        // 1 => OPEN, se ha llamdo al metodo open del objeto (xhr)
        // 2 => HEADERS_RECEIVED, se esta llamando al metodo send()
        // 3 => LOADING, esta cargando, es decir esta recividiendo la respuesta.
        // 4 => DONE,se ha completado la operación.

        //si todo ha sido correcto
        // console.log(this.reponse);

        //tranformarlo en JSON parseandolo
        const data = JSON.parse(this.response);
        // console.log(data);
        //pintar API insertar la respuesta en formato HML
        const HTMLRespons = document.querySelector("#contenedor");

        const Template = data.map((todos) => `<li> ${todos.id} + ${todos.title}</li>`);
        HTMLRespons.innerHTML = `<ul> ${Template} </ul>`




    }

}


xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${API_URL}/todos`);
xhr.send();



*/
