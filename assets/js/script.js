let table = document.querySelector("table");

//Prendere i dati dall'input
class Users {
  constructor(nome, surname, birthday) {
    this.nome = nome;
    this.surname = surname;
    this.birthday = birthday;
  }
}
//ciclarli
//scriverli nella tabella

function getUser() {
  let newUser = new Users(
    document.querySelector("#name-field").value,
    document.querySelector("#surname-field").value,
    document.querySelector("#date-field").value
  );

  let newRow = document.createElement("tr");
  newRow.innerHTML = `<th scope="row">1</th>
                <td>${newUser.nome}</td>
                <td>${newUser.surname}</td>
                <td>${newUser.birthday}</td>`;
  table.appendChild(newRow);

  console.log(newUser);
}
