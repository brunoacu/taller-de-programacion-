import Cliente from "./cliente.js";

function ejecutar(){    
    let nombre=document.getElementById("inp_nombre").value;
    let apellido=document.getElementById("inp_apellido").value;
    let dni=document.getElementById("inp_dni").value;
    //se crea la instancia de la clase y se ejecuta el metodo constructor
    let cliente= new Cliente (nombre,apellido,dni);
    //ejecutamos el metodo mostrar_datos
    cliente.mostrar_datos();


}



document.getElementById("btn_guardar").addEventListener("click",ejecutar);


