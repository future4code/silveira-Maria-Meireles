/*
    Exercícios de interpretação de código:

    1) As mensagens mostradas no console serão:
        a. False;
        b. False;
        c. True;
        d. Boolean.

    2) Acho que o console vai imprimir um "NaN" (not a number),
       porque não foram feitas a conversões dos inputs no prompt em números.

    3) Ele poderia fazer:

        let primeiroNumero = Number(prompt("Digite um número"));
        let segundoNumero = Number(prompt("Digite outro número"));

        const soma = primeiroNumero + segundoNumero;

        console.log(soma);
*/


// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)
const idadeUsuario = Number(prompt("Quantos anos você tem?"));
const IdadeDoAmigo = Number(prompt("Quantos anos tem seu(a) melhor amigo(a)?"));

const verificaIdadeMaior = idadeUsuario > IdadeDoAmigo;
const diferencaDeIdade = idadeUsuario - IdadeDoAmigo;

console.log("Sua idade é maior que a do seu amigo?", verificaIdadeMaior);
console.log("A diferença de idade entre vocês é de:", diferencaDeIdade, "anos.");


// 2)
const numeroPar = +prompt("Insira um número par.");
const restoDivisao = numeroPar % 2;

console.log("O resto da divisão por 2 é:", restoDivisao);
// 2.c) O resto da divisão de um número par por dois sempre será zero.
// 2.d) Caso o usuário insira um número ímpar, essa divisão terá um valor como resto.


// 3)
const idadeEmAnos = +prompt("Quantos anos você tem?");

const idadeEmMeses = idadeEmAnos * 12;
const idadeEmDias = idadeEmAnos * 365;
const idadeEmHoras = idadeEmDias * 24;

console.log("Você tem:", idadeEmMeses, "meses,", idadeEmDias, "dias e", idadeEmHoras, "horas de vida.");


// 4)
const primeiroNumero = +prompt("Insira um número");
const segundoNumero = +prompt("Insira um segundo número");

const maiorNumero = primeiroNumero > segundoNumero;
const igualdadeNumeros = primeiroNumero === segundoNumero;
const verificaDivisaoDoPrimeiro = primeiroNumero % segundoNumero === 0;
const verificaDivisaoSegundoNumero = segundoNumero % primeiroNumero === 0;

console.log("O primeiro número é maior que o segundo?", maiorNumero);
console.log("O primeiro número é igual ao segundo?", igualdadeNumeros);
console.log("O primeiro número é divisível pelo segundo?", verificaDivisaoDoPrimeiro);
console.log("O segundo número é divisível pelo primeiro?", verificaDivisaoSegundoNumero);


// DESAFIOS:
// 1)

const grausFahrenEmKelvin = (77 -32) * (5/9) + 273.15;
const grausCelsiusEmFahren = (80) * (9/5) + 32;

const respostaUsuario = +prompt("Insira um valor em Celsius para fazer a conversão");

const celsiusEmFahren = (respostaUsuario) * (9/5) + 32;
const fahrenEmKelvin = (celsiusEmFahren - 32) * (5/9) + 273.15;

console.log("77°F equivalem a", grausFahrenEmKelvin, "°K.");
console.log("80°C equivalem a", grausCelsiusEmFahren, "°F.");
console.log("30°C equivalem a", celsiusEmFahren, "°F, e a", fahrenEmKelvin, "°K");

