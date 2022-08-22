export default class Cliente {

    /*Bob el*/constructor(nombre1,apellido1,dni1)//es importante mantener el orden de los parametros, no tiene que ser igual
    {
    this.nombre=nombre1
    this.apellido=apellido1
    this.dni=dni1


    }
    mostrar_datos() {
      console.log(`El nombre es: ${this.nombre}`);
      console.log(`El apellido es: ${this.apellido}`);
      console.log(`El dni es: ${this.dni}`);
    }
  }