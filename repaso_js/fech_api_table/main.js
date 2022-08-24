const obtener_usuarios = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const lista_usuarios = await users.json();
  let filas = [];
  lista_usuarios.forEach((element, index) => {
    let fila = `
    <tr>
    <td>${index + 1}</td>
    <td>${element.name}</td>
    <td>${element.usersname}</td>
    <td>${element.email}</td>
    <td>${element.website}</td>
    </tr>`;
    filas.push(fila);
  });
  document.getElementById("tbl_body").innerHTML = filas.join("");
};

obtener_usuarios();
