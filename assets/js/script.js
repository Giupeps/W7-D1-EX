let table = document.querySelector("table");

class Users {
  constructor(nome, surname, birthday) {
    this.nome = nome;
    this.surname = surname;
    this.birthday = birthday;
  }
}

function getUser() {
  let newUser = new Users(
    document.querySelector("#name-field").value,
    document.querySelector("#surname-field").value,
    document.querySelector("#date-field").value
  );

  console.log(newUser);

  let newRow = document.createElement("tr");
  newRow.innerHTML = `<th scope="row">→</th>
                <td>${newUser.nome}</td>
                <td>${newUser.surname}</td>
                <td>${newUser.birthday}</td>`;
  table.appendChild(newRow);
  document.querySelector("#name-field").value = "";
  document.querySelector("#surname-field").value = "";
  document.querySelector("#date-field").value = "";
}

document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
});
