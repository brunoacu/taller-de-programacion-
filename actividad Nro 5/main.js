//2)
//A). Crear el siguiente array tal y como se muestra a continuación. Deberá crearse de manera global.
//Es decir, no debe estar comprendido en ninguna función.
let criptos = [
  "Bitcoin",
  "Ethereum",
  "Tether",
  "BNB",
  "Cardano",
  "Dai",
  "Helium",
  "Shiba Inu",
  "Tron",
  "Cronos",
  "Solana",
];
console.log(criptos);

//B) Agregar al inicio del arreglo la criptomoneda ‘Stellar’
criptos.unshift("Stella");
console.log(criptos);

//C) Eliminar las criptomonedas Shiba Inu y Tron respectivamente
let indice2 = criptos.indexOf("Shiba Inu");
criptos.splice(indice2, 2);
console.log(criptos);

//D)Agregar la criptomoneda ‘Gate’ al final del arreglo
criptos.push("Gate");
console.log(criptos);

//E)
/*Crear una función que imprima en un párrafo lo siguiente:
        a) La longitud del arreglo
        b) El último elemento del arreglo
        c) La criptomoneda Helium obteniendo su indice previamente con el método
            correspondiente.

    Destinar un botón exclusivamente para esta función */

function imprmir() {
  //a)
  let longitud = criptos.length;
  console.log("longitud del arreglo= " + longitud);
  //b)
  let ultimo = criptos[longitud - 1];
  console.log(ultimo);
  //c)
  let indice = criptos.indexOf("Helium");
  document.getElementById("parrafo1").innerHTML = `
        Longitud= ${longitud}<br>
        Ultimo elemento= ${ultimo}<br>
        Indice= ${indice}    


  `;
}
document.getElementById("btn_imprimir").addEventListener("click", imprmir);

//F). Crear una función que recorra el arreglo e imprimirlo en una lista. Es decir, en un ListGroup
//de Bootstrap 5. La función se deberá invocar a través de un botón.

const recorrer_arreglo = () => {
  let items = [];
  criptos.forEach((element, index) => {
    let item = `
            <li class="list-group-item">${element}</li>
            `;
    items.push(item);
  });
  document.getElementById("ul1").innerHTML = items.join("");
};
document
  .getElementById("btn_recorrer")
  .addEventListener("click", recorrer_arreglo);

//3)
const framework = () => {
  let framework = {
    titulo: "Framework utilizado en la actualidad",
    nombre: "Angular",
    características: {
      lenguaje: "TypeScript",
      patron: "MVVM",
      spa: "si",
    },
  };
  const { titulo, nombre } = framework;
  const { lenguaje, patron, spa } = framework.características;
  console.log(`
    Titulo: ${titulo}
    Nombre: ${nombre}
    Lenguaje: ${lenguaje}
    Patron:${patron}
    Spa:${spa}
    `);
}
document.getElementById("btn_mostrar").addEventListener("click", framework);
