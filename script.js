const email = document.querySelector(".email");
const form = document.querySelector("form");
const textFormVazio = document.getElementById("textForm");

form.addEventListener("submit", (event) => {
  if (email.value == "") {
    textFormVazio.innerText = "*Campo de email vazio";
    console.log("Digite um valor");
    event.preventDefault();
  } else {
    textFormVazio.innerText = "";
  }
});

email.addEventListener("keyup", () => {
  if (validadorEmail(email.value) !== true) {
    textFormVazio.innerText = "Por favor insira um endereço de email valido";
  } else {
    textFormVazio.innerText = "";
  }
});

function validadorEmail(email) {
  const emailValidador =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

  return emailValidador.test(email);
}
