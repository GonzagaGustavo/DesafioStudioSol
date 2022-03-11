// Pegando os elementos do HTML

const resposta = document.querySelector("#resposta");
const input = document.querySelector("input");
const button = document.querySelector("button");
const display = document.querySelector(".display");
const led2 = document.querySelector(".display2")
const led3 = document.querySelector(".display3")

Number[0] = zero("#ddddd", display)
Number[1] = um("#ddddd", display)
Number[2] = dois("#ddddd", display)
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
0
//mostrando na tela
if (!data.StatusCode) {
  if (data.value > 9) {
    if (data.value > 99) {
      display2()
      display3();
    } else {
      display2();
    }
  }
  
} else {
  display2()
  display3()
  //Mundando os estilos
  button.style.background = "#DDDDDD";
  input.style.backgroundColor = "#F5F5F5";
  resposta.style.color = "#CC3300"
  // Desabilitando o botão e os inputs
  button.disabled = true;
  input.disabled = true;
  //Mostrando os dados do erro na tela
  resposta.innerHTML = "ERROR";
  cinco("#CC3300", display), zero("#CC3300", led2), dois("#CC3300", led3)
}
//Display de 7 segmentos
function display2() {
  const display2 = document.querySelector(".display2");
  display2.classList.add("display");
}
function display3() {
  const display3 = document.querySelector(".display3");
  display3.classList.add("display");
}

function zero(color, render) {
  //Criando os elementos
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  //Atribuindo uma className
  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  //Colocando uma cor de fundo
  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = color;
  //Colocando os elementos dentro da div display
  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6);
}

function um(color) {
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");

  elem2.classList.add("dois");
  elem3.classList.add("tres");

  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;

  display.appendChild(elem2);
  display.appendChild(elem3);
}

function dois(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem7 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem4 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem7.classList.add("sete");
  elem6.classList.add("seis");
  elem4.classList.add("quatro");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem7.style.backgroundColor = color;
  elem6.style.backgroundColor = color;
  elem4.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem7);
  render.appendChild(elem6);
  render.appendChild(elem4);
}

function tres(color) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem7.style.backgroundColor = color;

  display.appendChild(elem1);
  display.appendChild(elem2);
  display.appendChild(elem3);
  display.appendChild(elem4);
  display.appendChild(elem7);
}

function quatro(color) {
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem5.classList.add("cinco");
  elem7.classList.add("sete");

  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem5.style.backgroundColor = color;
  elem7.style.backgroundColor = color;

  display.appendChild(elem2);
  display.appendChild(elem3);
  display.appendChild(elem5);
  display.appendChild(elem7);
}

function cinco(color, render) {
  const elem1 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem5.classList.add("cinco");
  elem7.classList.add("cinco");

  elem1.style.backgroundColor = color;
  elem5.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem5);
}