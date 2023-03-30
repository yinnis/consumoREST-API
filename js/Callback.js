//Repaso de como trabajan las funciones
function primero(){
    console.log("Primera Función");
}
function segundo(){
    console.log("Segunda Función");
}
//Llamar a las funciones para que se ejecuten
primero();
segundo();

//-------------------------------------------------------------------------------------------------------

//Ejemplo más común de un Callback en JS
setTimeout(function(){
    console.log("Este texto aparece después de 3 segundos");
}, 3000);


//Recorrido normal con if
const list1 = ["A", "B", "C", "D", "E", "F", "G"];
for(var i=0; i< list1.length; i++){
    console.log("i = " + i + "  list = " + list1[i])
}

//Recorrido con forEach y callback
const list2 = ["1", "2", "3", "4", "5", "6", "7"];
list2.forEach(function(e, i) {
    console.log("i = ", i,  "  list = ", e)
});

//Recorrido en función anónima y función de flecha
["a", "b", "c", "d", "e", "f", "g"].forEach((e,i) => console.log("i=", i, "list=", e));

//-------------------------------------------------------------------------------------------------------
function imprimirMensaje(mensaje) {
    console.log(mensaje);
}
  
function ejecutarDespuesDeImprimir(mensaje, callback) {
    imprimirMensaje(mensaje);
    callback();
}

//Callbacks Anidados!
// function ejecutarDespuesDeImprimir(mensaje, callback) {
//     setTimeout(() => {
//         imprimirMensaje(mensaje);
//     }, 3000);
//     callback();
// }
  
ejecutarDespuesDeImprimir('Este mensaje es el del parámetro!', function() {
    console.log('La función callback ha sido ejecutada exitosamente.');
});
  