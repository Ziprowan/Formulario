//listado de variables

var Formulario =[];
var arraycovertido =[];
var Nombre ="";
var Apellido ="";
var Ubicacion ="";

//guarda la informacion que llena el usuario en los 3 campos vacios

var GuardarInfo = function(){
    var Nombre = document.getElementById("Nombres").value
    var Apellido = document.getElementById("Apellidos").value
    var Direccion = document.getElementById("Direccion").value
    console.log(Nombre, Apellido, Direccion)
    Formulario.push({Nombre,Apellido,Direccion})
    localStorage.setItem("PersonaInfo", JSON.stringify(Formulario))
    leerinformacion()
}
