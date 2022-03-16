// Pegando os elementos do HTML

const resposta = document.querySelector("#resposta");
const input = document.querySelector("input");
const button = document.querySelector(".enviar");
const display = document.querySelector(".display");
const led2 = document.querySelector(".display2");
const led3 = document.querySelector(".display3");
const btnRefresh = document.querySelector(".newgame");
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
let value = data.value;
//Verificando se o número escrito é maior ou menor ou correto
function verifyNum() {
  if (input.value > value) {
    resposta.innerHTML = "É menor";
    resposta.style.color = "#FF6600";
  } else if (input.value < value) {
    resposta.innerHTML = "É maior";
    resposta.style.color = "#FF6600";
  } else if (input.value == value) {
    resposta.innerHTML = "Você acertou!!!!";
    //Mundando os estilos
    resposta.style.color = "#32BF00";
    button.style.background = "#DDDDDD";
    input.style.backgroundColor = "#F5F5F5";
    document.querySelector(".form").style.margin = "0";
    // Desabilitando o botão e os inputs
    button.disabled = true;
    input.disabled = true;
    //Mostrando o botão de recomeço
    btnRefresh.style.display = "flex";
    //Tirando o valor do input
    input.value = "";
    exibindo("#32BF00");
  }
}
//Teste para ver se as resposta estão vindo corretamente
console.log(data);

//mostrando na tela
//Verificando se tem erro
function exibindo(color) {
  if (!data.StatusCode) {
    //Verificando quantos caracteres tem o número
    if (data.value > 9) {
      if (data.value > 99) {
        display2();
        display3();
      } else {
        display2();
      }
    }

    //Verificando o primeiro numero
    if (`${value}`.substring(0, 1) == "0") {
      zero(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "1") {
      um(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "2") {
      dois(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "3") {
      tres(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "4") {
      quatro(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "5") {
      cinco(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "6") {
      seis(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "7") {
      sete(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "8") {
      oito(color ? color : "#262A34", display);
    } else if (`${value}`.substring(0, 1) == "9") {
      nove(color ? color : "#262A34", display);
    }
    //Verificando o segundo numero
    if (`${value}`.substring(1, 2) == "0") {
      zero(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "1") {
      um(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "2") {
      dois(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "3") {
      tres(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "4") {
      quatro(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "5") {
      cinco(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "6") {
      seis(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "7") {
      sete(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "8") {
      oito(color ? color : "#262A34", led2);
    } else if (`${value}`.substring(1, 2) == "9") {
      nove(color ? color : "#262A34", led2);
    }
    //Verificando o terceiro numero
    if (`${value}`.substring(2, 3) == "0") {
      zero(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "1") {
      um(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "2") {
      dois(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "3") {
      tres(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "4") {
      quatro(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "5") {
      cinco(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "6") {
      seis(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "7") {
      sete(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "8") {
      oito(color ? color : "#262A34", led3);
    } else if (`${value}`.substring(2, 3) == "9") {
      nove(color ? color : "#262A34", led3);
    }
  } else {
    display2();
    display3();
    //Mundando os estilos
    button.style.background = "#DDDDDD";
    input.style.backgroundColor = "#F5F5F5";
    resposta.style.color = "#CC3300";
    btnRefresh.style.display = "flex";
    document.querySelector(".form").style.margin = "0";
    // Desabilitando o botão e os inputs
    button.disabled = true;
    input.disabled = true;
    //Mostrando os dados do erro na tela
    resposta.innerHTML = "ERRO";
    cinco("#CC3300", display), zero("#CC3300", led2), dois("#CC3300", led3);
  }
}
//Display de 7 segmentos
//Displays
function display2() {
  const display2 = document.querySelector(".display2");
  display2.classList.add("display");
}
function display3() {
  const display3 = document.querySelector(".display3");
  display3.classList.add("display");
}
//Números
function zero(color, render) {
  //Criando os elementos
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");
  //Atribuindo uma className
  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");
  //Colocando uma cor de fundo
  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = color;
  elem7.style.backgroundColor = "#DDDDDD";
  //Colocando os elementos dentro da div display
  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6);
  render.appendChild(elem7);
}

function um(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = "#DDDDDD";

  elem4.style.backgroundColor = "#DDDDDD";
  elem5.style.backgroundColor = "#DDDDDD";
  elem6.style.backgroundColor = "#DDDDDD";
  elem7.style.backgroundColor = "#DDDDDD";
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6);
  render.appendChild(elem7);
}

function dois(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div")
  const elem5 = document.createElement("div")
  const elem7 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem4 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres")
  elem5.classList.add("cinco")
  elem7.classList.add("sete");
  elem6.classList.add("seis");
  elem4.classList.add("quatro");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = "#DDDDDD"
  elem5.style.backgroundColor = "#DDDDDD"
  elem7.style.backgroundColor = color;
  elem6.style.backgroundColor = color;
  elem4.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3)
  render.appendChild(elem5)
  render.appendChild(elem7);
  render.appendChild(elem6);
  render.appendChild(elem4);
}

function tres(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div")
  const elem6 = document.createElement("div")
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem5.style.backgroundColor = "#DDDDDD";
  elem6.style.backgroundColor = "#DDDDDD";
  elem7.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5)
  render.appendChild(elem6)
  render.appendChild(elem7);
}

function quatro(color, render) {
  const elem1 = document.createElement("div")
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div")
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div")
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = "#DDDDDD";
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = "#DDDDDD";
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = "#DDDDDD";
  elem7.style.backgroundColor = color;

  render.appendChild(elem1)
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4)
  render.appendChild(elem5);
  render.appendChild(elem6)
  render.appendChild(elem7);
}

function cinco(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = "#DDDDDD";
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = "#DDDDDD";
  elem7.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem2)
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6)
  render.appendChild(elem7);
}

function seis(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = "#DDDDDD";
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = color;
  elem7.style.backgroundColor = color;

  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6);
  render.appendChild(elem7);
}

function sete(color, render) {
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");

  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");

  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = "#DDDDDD";
  elem5.style.backgroundColor = "#DDDDDD";
  elem6.style.backgroundColor = "#DDDDDD";
  elem7.style.backgroundColor = "#DDDDDD";

  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4)
  render.appendChild(elem5)
  render.appendChild(elem6)
  render.appendChild(elem7)
}
function oito(color, render) {
  //Criando os elementos
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");
  //Atribuindo uma className
  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");
  //Colocando uma cor de fundo
  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = color;
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = color;
  elem7.style.backgroundColor = color;
  //Colocando os elementos dentro da div display
  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6);
  render.appendChild(elem7);
}
function nove(color, render) {
  //Criando os elementos
  const elem1 = document.createElement("div");
  const elem2 = document.createElement("div");
  const elem3 = document.createElement("div");
  const elem4 = document.createElement("div");
  const elem5 = document.createElement("div");
  const elem6 = document.createElement("div");
  const elem7 = document.createElement("div");
  //Atribuindo uma className
  elem1.classList.add("um");
  elem2.classList.add("dois");
  elem3.classList.add("tres");
  elem4.classList.add("quatro");
  elem5.classList.add("cinco");
  elem6.classList.add("seis");
  elem7.classList.add("sete");
  //Colocando uma cor de fundo
  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem3.style.backgroundColor = color;
  elem4.style.backgroundColor = "#DDDDDD";
  elem5.style.backgroundColor = color;
  elem6.style.backgroundColor = "#DDDDDD";
  elem7.style.backgroundColor = color;
  //Colocando os elementos dentro da div display
  render.appendChild(elem1);
  render.appendChild(elem2);
  render.appendChild(elem3);
  render.appendChild(elem4);
  render.appendChild(elem5);
  render.appendChild(elem6);
  render.appendChild(elem7);
}
//Recarregando a pagina
function refresh() {
  window.location.reload();
}
exibindo();
