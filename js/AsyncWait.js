function sumar(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject("Los parámetros deben ser números");
      } else {
        resolve(a + b);
      }
    }, 2000);
  });
}

async function sumarAsync(a, b) {
  try {
    const resultado = await sumar(a, b);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

var n1 = 3, n2 = "6";
sumarAsync(n1, n2);

//-------------------------------------------------------------------------------------------------------

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function contarHastaDiez() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    await esperar(1000);
  }
  console.log("¡Listo!");
}

contarHastaDiez();

//-------------------------------------------------------------------------------------------------------

function obtenerDatos() {
  return new Promise(function(resolve, reject) {
    // Simulamos una solicitud HTTP para obtener datos
    setTimeout(function() {
      var datos = { nombre: "Juan", edad: 30 };
      resolve(datos);
    }, 2000);
  });
}

async function mostrarDatos() {
  try {
    var datos = await obtenerDatos();
    console.log("Nombre: " + datos.nombre);
    console.log("Edad: " + datos.edad);
  } catch(error) {
    console.log("Ocurrió un error: " + error);
  }
}

mostrarDatos();

//-------------------------------------------------------------------------------------------------------