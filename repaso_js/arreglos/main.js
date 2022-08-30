//cramos arreglo
let lenguaje = ["Java", "Python", "JavaScrip", "C++", "Visual Basic", "Go"];

//longitud sw un arreglo
let longitud = lenguaje.length;
console.log("longitud del arreglo= " + longitud);

//acceder al ultimo elemento de un arreglo
let ultimo = lenguaje[longitud - 1];

//recorrer un areglo
lenguaje.forEach((element, index) => {
  console.log(index + 1 + "-" + element);
});

//agregar un elemento al final del arreglo
lenguaje.push("Php");
console.log(lenguaje);

//como elimino el ultimo elemento que agregamos (Php)
lenguaje.pop();
console.log(lenguaje);

//como agregar un elemento al inicio del areglo
lenguaje.unshift("C#");
console.log(lenguaje);

//como eliminar el primer elemento
lenguaje.shift()
console.log(lenguaje    )
