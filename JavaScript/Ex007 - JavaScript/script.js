var resultado = document.getElementById("resultado");

var acao1 = 0;
var acao2 = 0;
var acao3 = 0;
var acao4 = 0;

function acao1() {
  
  resultado.textContent += 'Ação 1 ';
}

function acao2() {
  
  resultado.textContent = "Ação 2: ";
}

function acao3() {
  
  resultado.textContent = "Ação 3: " ;
}

function acao4() {
  
  resultado.textContent = "Ação 4: ";
}

function limpar() {
  acao1 = 0;
  acao2 = 0;
  acao3 = 0;
  acao4 = 0;
  resultado.textContent = "";
}