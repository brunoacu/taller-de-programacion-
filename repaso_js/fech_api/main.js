function mostrar_objeto() {
  let cliente = {
    nombre: "Pepito",
    apellido: "pozzo",
    dni: 44567980,
    correo: {
      outlook: "superpepito@gmail.com",
      gmail: "pepis@gmail.com",
      yahoo: "elpepo@yahoo.com.ar",
    },
  };
  //comillas para escribir en varios renglones= altGr+tecla enter a la izquierda abajo(``)
  //forma tradicional
  /*const outlook = cliente.correo.outlook;
  const gmail = cliente.correo.gmail;
  const yahoo = cliente.correo.yahoo;*/
  //forma nueva
  const { outlook, gmail, yahoo } = cliente.correo;
  console.log(`correo de pepito:
  outlook: ${outlook}
  gmail: ${gmail}
  yahoo: ${yahoo}`);
}
mostrar_objeto();
//algunos apuntes
//api nos una interfaz de programacion para cominicar aplicaciones
//objeto=estructuras de datos

//creamos funcion felcha
const consumir_api = async () => {
  //realizamos mediante la funcion nativa denomindad fetch una solicitud http atravez del metodo GET de manera de obtener las publicaciones en notacion JSON
  const publicacion = await fetch("https://jsonplaceholder.typicode.com/posts");
  //parciando datos
  const publicacion_defenitiva = await publicacion.json();
  let item_totales = [];
  //dice que va arrecorrer los elementos del arreglo
  publicacion_defenitiva.forEach((element) => {
    //console.log('Titulo: ' + element.title);
    let item = `<li class="list-group-item">${element.title}</li>`;
    item_totales.push(item);
  });
  document.getElementById("lista_publicaciones").innerHTML =
    item_totales.join("");
};
consumir_api();
