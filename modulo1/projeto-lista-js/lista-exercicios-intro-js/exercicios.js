// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() { 
  const alturaTriangulo = +prompt("Insira a altura do triãngulo em centímetros");
  const larguraTriangulo = +prompt("Insira a largura do triãngulo em centímetros");

  console.log(alturaTriangulo * larguraTriangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Em que ano estamos?");
  const anoDeNascimento = +prompt("Em que ano você nasceu?");

  console.log(anoAtual - anoDeNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const resultadoIMC = peso / (altura * altura);

    return resultadoIMC;

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nomeUsuario = prompt("Qual é o seu nome?");
  const idadeUsuario = +prompt("Quantos anos você tem?");
  const emailUsuario = prompt("Insira o seu e-mail");

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavoritaUm = prompt("Insira uma de suas cores favoritas");
  const corFavoritaDois = prompt("Insira uma segunda cor");
  const corFavoritaTres = prompt("Insira uma terceira cor");
  const listaCoresFavoritas = [];

  listaCoresFavoritas.push(corFavoritaUm);
  listaCoresFavoritas.push(corFavoritaDois);
  listaCoresFavoritas.push(corFavoritaTres);

    console.log(listaCoresFavoritas);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

    return custo / valorIngresso;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  
  return array[array.length -1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  
  const primeiroElemento = array.shift();
  const ultimoElemento = array.pop();

  array.unshift(ultimoElemento);
  array.push(primeiroElemento);

    return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  const primeiraStringMinuscula = string1.toLowerCase();
  const segundaSringMinuscula = string2.toLowerCase();

    return primeiraStringMinuscula === segundaSringMinuscula;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

  const anoAtual = +prompt("Em que ano estamos?");
  const anoNascimento = +prompt("Em que ano você nasceu?");
  const anoEmissaoRG = +prompt("Em que ano sua carteira foi emitida?");

  const idadePessoa = anoAtual - anoNascimento;
  const vencimentoRG = anoAtual - anoEmissaoRG;

  const vinteAnosOuMenos = idadePessoa <= 20 && vencimentoRG >= 5;
  const entreVinteEcinquenta = idadePessoa >= 20 && idadePessoa <= 50 && vencimentoRG >= 10;
  const acimaDeCinquenta = idadePessoa > 50 && vencimentoRG >= 15;
  
    console.log(vinteAnosOuMenos || entreVinteEcinquenta || acimaDeCinquenta);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  
  const perguntaMaioridade = prompt("Você é maior de 18 anos? Sim ou não?").toLowerCase();
  const perguntaEscolaridade = prompt("Você possui ensino médio completo? Sim ou não?").toLowerCase();
  const disponibilidadeHorarios = prompt("VocÊ possui disponibilidade exclusiva durante os horários do curso? Sim ou não?").toLowerCase();
  
  const respostaMaioridade = perguntaMaioridade === "sim";
  const respostaEscolaridade = perguntaEscolaridade === "sim";
  const respostaHorarios = disponibilidadeHorarios === "sim";

    console.log(respostaMaioridade && respostaEscolaridade && respostaHorarios);
}
