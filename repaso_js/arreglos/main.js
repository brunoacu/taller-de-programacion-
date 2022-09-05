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
lenguaje.shift();
console.log(lenguaje);

//como encontrar el indice de un elemento y mostrarlo posteriormente
let indice = lenguaje.indexOf("JavaScrip"); //encontrar
console.log(lenguaje[indice]);

//como eliminar un elemento de un arreglo segun su indice
let indice2 = lenguaje.indexOf("C++");
let eliminados = lenguaje.splice(indice2, 2);
console.log(lenguaje);
console.log("los eliminados fueron los siguientes: " + eliminados);

//como agrego elementos dentro de un arreglo
lenguaje.splice(indice, 0, "Visual Basic");
console.log(lenguaje);

//como copiar un arreglo
let copia = lenguaje.slice();
copia.push("Ruby");
console.log(copia);
