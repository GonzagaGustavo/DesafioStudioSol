// Pegando os elementos do HTML
const number = document.querySelector("#number");
const resposta = document.querySelector("#resposta");
const input = document.querySelector("input");
const button = document.querySelector("button");

//Pegando o valor dos números por meio da URL disponibilizada
function getData(url) {
  let req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send();
  return req.responseText;
}
let data = JSON.parse(
  getData("https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300")
);

//Teste para ver se as resposta estão vindo corretamente
console.log(data);

//mostrando na tela
if (!data.StatusCode) {
  number.innerHTML = data.value;
} else {
  //Mundando os estilos
  button.style.background = "#DDDDDD";
  input.style.backgroundColor = "#F5F5F5";
  number.style.color = "#CC3300";
  resposta.style.color = "#CC3300";
  // Desabilitando o botão e os inputs
  button.disabled = true;
  input.disabled = true;
  //Mostrando os dados do erro na tela
  resposta.innerHTML = "ERROR";
  number.innerHTML = data.StatusCode;
}
