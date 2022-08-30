import Catalogo from "./catalogo.js";

function mostrar_catalogo() {
  let categoria = document.getElementById("slt_operar").value;
  let catalogo = new Catalogo();
  catalogo.mostrar_catalogo(categoria)
}
document.getElementById("slt_operar").addEventListener("change", mostrar_catalogo)