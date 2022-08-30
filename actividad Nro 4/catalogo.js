export default class Catalogo {
  constructor() {}
  async mostrar_catalogo(categoria) {
    let catalogo = await fetch("https://fakestoreapi.com/products"+categoria); 

    let lista_catalogo = await catalogo.json();
    let columnas = [];
    lista_catalogo.forEach((element) => {
      let columna = `
    <div class="col-lg-4 mb-3">
          <div class="card">
             <img height="350" src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="#" class="btn btn-primary">${element.price}</a>
             </div>
         </div>            
       </div>
     `;
      columnas.push(columna);
    });
    document.getElementById("row_card").innerHTML = columnas.join("");
  }
}
//   async mostrar_catalogo() {
//     let catalogo = await fetch("https://fakestoreapi.com/products");

//     let lista_catalogo = await catalogo.json();
//     let columnas = [];
//     lista_catalogo.forEach((element) => {
//       let columna = `
//         <div class="col-lg-4 mb-3">
//             <div class="card">
//                 <img height="350" src="${element.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${element.title}</h5>
//                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="#" class="btn btn-primary">${element.price}</a>
//                 </div>
//             </div>
//         </div>
//       `;
//       columnas.push(columna);
//     });
//     document.getElementById("row_card").innerHTML = columnas.join("");
//   }
