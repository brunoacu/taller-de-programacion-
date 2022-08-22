export default class Pitagora {
  a;
  b;
  constructor() {}
  calcular_hipotenusa() {
    let num1 = Math.pow(this.a, 2) + Math.pow(this.b, 2);
    let h = Math.sqrt(num1);
    return h;
  }
}
