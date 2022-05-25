var FilaPersona = [];
var conversor = [];
var sName = "";
var sApellido = ""; 
var sDireccion = "";

// <td class="btn btn-danger" onclick="Eliminar('+ i +')">Delete</td>

//leer los datos 
var LeerInformacion = function(){
    conversor = JSON.parse(localStorage.getItem('Fila'))
    console.log(conversor)
    document.getElementById('PersonasGuardadas').innerHTML = ""

    for (let i = 0; i < conversor.length; i++) {
        document.getElementById('PersonasGuardadas').innerHTML += '<tr><td>'+ conversor[i].sName +'<td>'+ conversor[i].sApellido +'<td>'+ conversor[i].sDireccion +'</td><td class="btn btn-danger" onclick="Eliminar('+ i +')">Delete</td></tr>'

    }

}

//Guardar datos en consola y local storage
var guardar = function(){
    var sName = document.getElementById('txtName').value;
    var sApellido = document.getElementById('txtApellido').value;
    var sDireccion = document.getElementById('txtAdress').value;
    console.log(sName,sApellido,sDireccion)

    FilaPersona.push({sName,sApellido,sDireccion})
    localStorage.setItem('Fila', JSON.stringify(FilaPersona))
    LeerInformacion()
}

//Elimina fila de datos, guarda el cambio y lo lee
var Eliminar = function(indice){
    console.log(indice)
    FilaPersona.splice(indice,1)
    localStorage.setItem('Fila', JSON.stringify(FilaPersona))
    LeerInformacion()
}



