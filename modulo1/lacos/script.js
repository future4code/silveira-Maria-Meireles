/*
    Exercícios de interpretação de código:

    1) O código executa um loop que irá operar enquanto a variável "i" for 
       menor de 5. E a cada volta, o loop soma o número contido em valor com o próximo.
       Acho que o console vai imprimir 10.

    2.a) Os consoles vão imprimir: 19;
                                   21;
                                   23;
                                   25;
                                   27;
                                   30.

    2.b) Não consegui pensar em uma lógica pra fazer com o que já aprendemos até aqui,
         Mas é possível usar o "for in", que retorna os índices ao invés dos valores.
         ps. Acabei de descobrir fazendo o exercício "2d" que existe sim uma maneira:

*/
       const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
        if (numero > 18) {
		    console.log(`O índice desse número é ${lista.indexOf(numero)}.`);
	};
};

/*
    3) *
       **
       ***
*/   

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)
const quantidadePets = +prompt("Quantos bichinhos de estimação você tem?");

if (quantidadePets === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}
else if (quantidadePets > 0) {
    listaDePets = [];

    for (let i = 0; i < quantidadePets; i++) {

        const nomeDosPets = prompt("Quais são os nomes deles?");
        listaDePets.push(nomeDosPets);
    };
    console.log(listaDePets);
} else {
    console.log(`Erro desconhecido`);
};


// 2)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70];

// a)
const itensNaLista = (lista) => {
    for (let item of lista) {
        console.log(item);
    };
};

itensNaLista(arrayOriginal);

// b)
const itensDivPorDez = (lista) => {
    for (let item of lista) {
        const itemDividido = item / 10;

        console.log(itemDividido);
    };
};

itensDivPorDez(arrayOriginal);


// c)
const separaNumerosPares = (lista) => {
    const listaDePares = [];

    for (let item of lista) {

        if (item % 2 === 0) {
            listaDePares.push(item);
        };
    };
    console.log(listaDePares);
};

separaNumerosPares(arrayOriginal);


// d)
const criarListaDeStrings = (lista) => {
    let novaLista = [];

    for (let item of lista) {
        novaLista.push(`O item no índice ${lista.indexOf(item)} é: ${item}`);
    };
    console.log(novaLista);
};

criarListaDeStrings(["Oi", "tudo", "bem", "?"]);

// e) 
const numerosMaioresEmenores = (lista) => {
    let maiorNumero = 0;
    let menorNumero = 130;

    for (let item of lista) {
        if (maiorNumero < item) {
            maiorNumero = item;
        }
        else if (menorNumero > item) {
            menorNumero = item;
        };
    };
    console.log(`O maior número no array é: ${maiorNumero}, e o menor é ${menorNumero}`);
};

numerosMaioresEmenores(arrayOriginal);


// DESAFIOS: 

// 1)

alert("O computador irá escolher um número.");
let numeroDoComputador = Math.round(Math.random() * 100);
let numeroDoJogadorDois;

alert("Agora vamos jogar!");

numeroTentativas = 0;
while (numeroDoJogadorDois !== numeroDoComputador) {
    numeroDoJogadorDois = +prompt("Chute um número de 1 a 100");
    console.log(`O numero chutado foi: ${numeroDoJogadorDois}`);

    if (numeroDoJogadorDois < numeroDoComputador) {
        console.log(`Errou. O número escolhido é menor`);
    }
    else if (numeroDoJogadorDois > numeroDoComputador) {
        console.log(`Errou. O número é maior`);
    };
    numeroTentativas++;
};
alert(`Acertou! O número de tentativas foi: ${numeroTentativas}`);


