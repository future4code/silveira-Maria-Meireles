/*
    Exercícios de interpretação de código:

    1) a. Undefined;
       b. null;
       c. 11;
       d. 3;
       e. 3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12 13;
       f. 9;

    2) SUBI NUM ÔNIBUS EM MIRROCOS 27.

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)

const nomeDoUsuario = prompt("Insira o seu nome:");
const emailDoUsuario = prompt("Insira o seu e-mail:");

console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso.
            Seja bem-vinda(o), ${nomeDoUsuario}!`);


// 2) 

const minhasComidasFavoritas = ["Broa", "Iogurte com fruta", "pão de queijo",
                                "Chocolate amargo", "açaí"];

console.log(minhasComidasFavoritas);
console.log(`Essas são minhas comidas favoritas`);
console.log(minhasComidasFavoritas[0]);
console.log(minhasComidasFavoritas[1]);
console.log(minhasComidasFavoritas[2]);
console.log(minhasComidasFavoritas[3]);
console.log(minhasComidasFavoritas[4]);

const comidaPreferidaUsuario = prompt("Qual é uma de suas comidas favoritas?");
minhasComidasFavoritas[1] = comidaPreferidaUsuario;

console.log(minhasComidasFavoritas);


// 3) 

const listaDeTarefas = [];

const tarefaUm = prompt("Insira uma tarefa");
const tarefaDois = prompt("Insira mais uma tarefa");
const tarefaTres = prompt("Insira a última tarefa");

listaDeTarefas.push(tarefaUm);
listaDeTarefas.push(tarefaDois);
listaDeTarefas.push(tarefaTres);

console.log(listaDeTarefas);

const tarefaRealizada = prompt("Digite o índice de uma das tarefas já finalizada: 0, 1 ou 2.");
listaDeTarefas.splice(tarefaRealizada, 1);

console.log(listaDeTarefas);


// DESAFIOS: 

// 1)

const fraseDoUsuario = prompt("Digite uma frase");
const fraseEmLista = fraseDoUsuario.split(" ");

console.log(fraseEmLista);


// 2)
const listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const indexDoAbacaxi = listaDeFrutas.indexOf("Abacaxi");
const tamanhoDaLista = listaDeFrutas.length;

console.log(`O índice de abacaxi é: ${indexDoAbacaxi}, e a lista tem ${tamanhoDaLista} elementos.`);

