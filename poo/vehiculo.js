//el nombre de las clases tienen que ir em mayuscula
export default class Vehiculo {
  //dentro de la clase de habla de metodos
  //Estan conformada por atributos y metodos
  marca = ""; //declarando atributo marca

  constructor(
    km //primer metodo que se ejecuta desde de crear la intancia de la clase, argumento
  ) {
    //atributos de la clase que se creo y se uso a la vez
    this.kilometraje = km;
  }
  //console.log('se ejecuto el el constructor')
  mostrar_km() {
    //metodo
    //aca puedo crear let solamente no afuera de los metodos
    console.log(`El km de mi vehiculo es: ${this.kilometraje} km`);
  }
  mostrar_marca() {
    console.log(`Marca del vehiculo ${this.marca}`);
  }
}
//forma vieja de mostrar una variable con la consola
//let km=59000
//console.log(`El km de mi vehiculo es: `+km+`km`)
//forma nueva y mas eficas
//console.log(`El km de mi vehiculo es: ${km} km`)

//uso de template srting, en este teclado se apreta dos veces la tecla al lado de la p
//console.log(`probando el uso de
//de template strig`)
