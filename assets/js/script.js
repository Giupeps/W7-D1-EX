//Prendere i dati dall'input
class Users {
  constructor(name, surname, birthday) {
    this.name = name;
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

  console.log(newUser);
}
