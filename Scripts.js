var FilaPersona = [];
var conversor = [];
var sName = "";
var sApellido = "";
var sDireccion = "";


//leer los datos 
var LeerInformacion = function(){
    conversor = JSON.parse(localStorage.getItem("Fila"))
    FilaPersona = conversor
    console.log(conversor)
    document.getElementById("PersonasGuardadas").innerHTML = ""

    for (let a = 0; a < conversor.length; a++) {
        document.getElementById("PersonasGuardadas").innerHTML += "<tr> <td>"+ conversor[a] +"</td><td>"+ conversor[a] +"</td><td>"+ conversor[a] +"</td> <td onclick="Eliminar("+ a +")">Delete</td></tr>"

    }

}

//Guardar datos en consola y local storage
var guardar = function(){
    var sName = document.getElementById("txtName").value;
    var sApellido = document.getElementById("txtApellido").value;
    var sDireccion = document.getElementById("txtAdress").value;
    console.log(sName,sApellido,sDireccion)

    FilaPersona.push({sName,sApellido,sDireccion})
    localStorage.setItem("Fila", JSON.stringify(FilaPersona))
    LeerInformacion()
}

//Elimina fila de datos, guarda el cambio y lo lee
var Eliminar = function(indice){
    console.log(indice)
    FilaPersona.splice(indice,1)
    localStorage.setItem("Fila", JSON.stringify(FilaPersona))
    LeerInformacion()
}


