function buscarUsuario() {
    return new Promise(function (resolve, reject) {
        // Hacer una solicitud HTTP para obtener información del usuario
        // En este ejemplo, simularemos una respuesta exitosa después de 2 segundos
        setTimeout(function () {
            var usuario = { id: 1, nombre: 'Juan' };
            resolve(usuario);
        }, 2000);
    });
}

buscarUsuario().then(function (usuario) {
    console.log(usuario);
}).catch(function (error) {
    console.log('Error:', error);
});

//-------------------------------------------------------------------------------------------------------

function lanzarMoneda() {
    return new Promise(function (resolve, reject) {
        var resultado = Math.random(); //Genera un número aleatorio

        if (resultado > 0.5) {
            resolve("Cara"); // Si el número es mayor a 0.5, resolvemos la promesa con "Cara"
        } else {
            reject("Sello"); // Si el número es menor o igual a 0.5, rechazamos la promesa con "Sello"
        }
    });
}

lanzarMoneda().then(function (resultado) {
    console.log("El resultado fue: " + resultado);
}).catch(function (error) {
    console.log("Ocurrió un error: " + error);
});
