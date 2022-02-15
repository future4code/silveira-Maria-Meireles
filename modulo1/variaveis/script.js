/*
    Exercícios de interpretação de código:

    1) O primeiro console irá imprimir 10, e o segundo irá imprimir 10, 5.

    2) O console vai imprimir 10, 10, 10.

    3) O programa pede ao usuário que ele diga quantas horas ele ttrabalha,
       e o quanto recebe por dia. Depois, esse programa emite um alerta com uma mensagem
       dizendo o quanto ele recebe por hora, que será o resultado da divisão de t por p.
       
       As variáveis poderiam se chamar "horasTrabalhadasPorDia" e "ganhosDiarios"
*/

// 1)

let nome;
let idade;

console.log(typeof nome, typeof idade);
// d) As variáveis são do tipo "undefined" porque eu as declarei, mas não atribuí nenhum valor;

nome = prompt("Como você se chama?");
idade = prompt("Quantos anos você tem?");

console.log(typeof nome, typeof idade);
// f) Dessa vez, as variáveis são do tipo "string", já que um novo valor foi atribuído à elas pelo prompt.
//    Apesar do segundo prompt ser um número, ele também retorna como string, pois o método prompt retorna apenas strings.

console.log("Olá", nome, "você tem:", idade, "anos.")

// 2)

const perguntaSeAlmocou = prompt("Você almoçou hoje? Sim ou não?");
const perguntaSobremesa = prompt("Teve sobremesa? Sim ou não?");
const perguntaSeTemPet = prompt("Você tem algum bichinho de estimação? Sim ou não?");

const respostaSobreAlmoco = perguntaSeAlmocou;
const respostaSobreSobremesa = perguntaSobremesa;
const respostaSobrePet = perguntaSeTemPet;

console.log("Você almoçou hoje? ", respostaSobreAlmoco);
console.log("Teve sobremesa? ", respostaSobreSobremesa);
console.log("Você tem algum bichinho de estimação? ", respostaSobrePet);

// 3) 

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é:", a);
console.log("O novo valor de b é:", b);

// DESAFIO:

const primeiroNumero = Number(prompt("Insira um número."));
const segundoNumero = Number(prompt("Insira mais um número"));

const somaDosNumeros = primeiroNumero + segundoNumero;
const multiplicaOsNumeros = primeiroNumero * segundoNumero;

console.log("O número", primeiroNumero, "somado ao número", segundoNumero, "resulta em:", somaDosNumeros);
console.log("O número", primeiroNumero, "multiplicado pelo número", segundoNumero, "resulta em:", multiplicaOsNumeros);
