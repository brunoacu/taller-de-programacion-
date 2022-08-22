//shift+alt+f para aomodar
import Vehiculo from "./vehiculo.js"; //solo se puede importar metodos
function ejecutar() {
  let kilometraje = document.getElementById("inp_km").value;
  //creamos la intancia del vehiculo
  let vehiculo = new Vehiculo(kilometraje);
  vehiculo.mostrar_km();
}

//DOM es una interfaz de programacion que permite comunicar JAva con HTML
document.getElementById("btn_mostrar").addEventListener("click", ejecutar); //el cick es n evento que interviene al usuario
//comillas dobles para propiedad
//comillas simple para textos
//modulo es un archivo que no tiene protagonista, que lleva las operaciones por los demas
//forma2

const mostrar_marca = () => {
  let vehiculo = new Vehiculo();
  vehiculo.marca = document.getElementById("slt_marca").value; //asignamos un valor al atributo
  vehiculo.mostrar_marca(); //posteriormente invocamos el metodo
};
document.getElementById("btn_aceptar").addEventListener("click", mostrar_marca);
//ventajas
//que tenga una sola codigo de linea, java dice si la funcion tiene una sola linea no es necesario las llave
// si el parametro es uno solo no es necesario usar llaves
