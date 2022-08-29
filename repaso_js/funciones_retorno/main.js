const calcular_tension = (a, b) => {
  const t = a * b;
  return t; //entrega el resultado
};
const operar = () => {
  let r = document.getElementById("inp_r").value;
  let i = document.getElementById("inp_i").value;
  //invocar a la funcion clacular_tension
  let respuesta = calcular_tension(r, i);
  alert(respuesta);
};
document.getElementById("btn_operar").addEventListener("click", operar);
