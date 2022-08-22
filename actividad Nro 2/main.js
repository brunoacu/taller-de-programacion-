import Pitagora from "./pitagora.js";
function calcular() {
  let pitagora = new Pitagora();
  pitagora.a = document.getElementById("inp_catetoopuesto").value;
  pitagora.b = document.getElementById("inp_catetoadyacente").value;

  let respuesta = pitagora.calcular_hipotenusa();
  document.getElementById("resultado").textContent = respuesta;
}

document.getElementById("btn_calculo").addEventListener("click", calcular);
