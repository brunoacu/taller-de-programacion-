//paso 1 crear un arreglo de prueba
let numeros = [1, 5, 10, 15];

let nuevo_array = numeros.map((element) => element * 2);
console.log(nuevo_array);

//un codigo de linea
const funcion_flecha = () => 9;

//Ejercicio para el elegido Franco Bravo
let valores = [1, 4, 9];
let raices = valores.map((element) => Math.sqrt(element));
console.log(raices);

//Ejercicio para el 2 valiente Cachulminio
//mapear un array de objetos

let datos_personales = [
  {
    nombre: "Franco",
    apellido: "Bravo",
  },
  {
    nombre: "Bruno",
    apellido: "Acuña",
  },
  {
    nombre: "Ignacio",
    apellido: "Cappellini",
  },
];
let nombre_apellidos = datos_personales.map((element) => element.nombre +" / "+ element.apellido);
console.log(nombre_apellidos);

