/* 
    Exercícios de interpretação de código

    1.a) O código testa a paridade de um número.
    b) Para os números pares, aqueles cujo o resto da divisão por dois resulta em zero.
    c) Para os ímpares, aqueles em que a divisão por dois resulta em um valor restante.

    2.a) O código serve para exibir o preço de uma determinada fruta em uma lista,
    de acordo com o nome que o usuário inserir.
    b) O preço da maçã é R$ 2.25.
    c) O preço da Pêra é R$ 5.

    3.a) A primeira linha pede que o usuário digite um número e converte a string em número;
    A primeira linha da condicional avalia se o valor na variável 'numero' é maior que 0, e se for,
    ela executa o bloco de código abaixo.
    b) Caso 10 fosse digitado: "Esse número passou no teste".
    ...b) Caso -10 fosse digitado, o console na condicional não seria mostrado. A mensagem seria apenas um 'undefined'.
    c) Haverá um erro no console, porque a variável "mensagem" está dentro do escopo da condicional sem um return.
    Os escopos pais não conseguem acessar valores nos filhos, a menos que eles sejam retornados.

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)
const podeDirigir = +prompt("Quantos anos você tem?");

if (podeDirigir >= 18) {

    console.log("Você está autorizado a dirigir.");
}
else if (podeDirigir < 18) {

    console.log("Você não pode dirigir.");
} else {

    console.log("Erro: (Valor digitado não reconhecido)");
};


// 2)
const turnoDeEstudos = prompt("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno).").toUpperCase();

if (turnoDeEstudos === "M") {

    console.log("Bom dia!");
}
else if (turnoDeEstudos === "V") {

    console.log("Boa tarde!");
} 
else if (turnoDeEstudos === "N") {

    console.log("Boa noite!");
} else {
    
    console.log("Inserção de turno inválida.");
};


// 3)
const turnoDeEstudosSwitch = prompt("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno).").toUpperCase();

switch(turnoDeEstudosSwitch) {
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case "N":
        console.log("Boa noite!");
        break;
    default:
        console.log("Inserção de turno inválida.");
}


// 4)
const generoDoFilme = prompt("Qual o gênero do filme que vocês vão assistir?").toLowerCase();
const valorDoIngresso = +prompt("Quanto custa a entrada?");

if (generoDoFilme === "fantasia" && valorDoIngresso < 15) {

    const aperitivo =  prompt("Qual lanche vocês querem?").toLowerCase();

    console.log("Bom filme!");

    switch (aperitivo) {
        case "pipoca":
            console.log(`E aproveite sua ${aperitivo}!`);
            break;
        case "chocolate":
            console.log(`E aproveite seu ${aperitivo}!`);
            break;
        default:
            console.log(`Poxa, estamos sem estoque. :(`);
    }
} else {

    console.log("Escolha outro filme. :(")
}; 


// DESAFIOS:

/*
 1) Modifique o código do exercício 4 de escrita de código para, 
    antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, 
    pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc)
    e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]",
    trocando [LANCHINHO] pelo que o usuário colocou no input.
    Feito acima.
*/


// 2)

const nomeComprador = prompt("Insira seu nome completo");
const tipoDeJogo = prompt("Qual o tipo de jogo? IN (internacional) ou DO (doméstico)?").toUpperCase();
const etapaCampeonato = prompt("De qual etapa? DT (decisão 3° lugar), SF (semi-final) ou FI (final)?").toUpperCase();
const categoriaJogo = +prompt("Qual é a categoria deste jogo? 1,2,3 ou 4?");
const quantidadeDeIngressos = +prompt("Quantos ingressos você quer?");

if (tipoDeJogo === "IN") {

    if (etapaCampeonato === "DT") {

        let precoIngresso;

        switch (categoriaJogo) {
            case 1:
                precoIngresso = 660.00;
                break;
            case 2:
                precoIngresso = 440.00;
                break;
            case 3:
                precoIngresso = 330.00;
                break;
            case 4: 
                precoIngresso = 170.00;
                break;
            default: 
                console.log("ERRO.");
        };

        precoIngresso *= 4.10;

        const valorTotalIngressos = precoIngresso * quantidadeDeIngressos;
        console.log(
            `---Dados da compra--- 
            Nome do cliente:  ${nomeComprador};
            Tipo do jogo:  ${tipoDeJogo}; 
            Etapa do jogo: ${etapaCampeonato}; 
            Categoria:  ${categoriaJogo};
            Quantidade de Ingressos:  ${quantidadeDeIngressos}; 
            ---Valores--- 
            Valor do ingresso:  U$${precoIngresso};
            Valor total:  U$${valorTotalIngressos}`);
    }

    else if (etapaCampeonato === "SF") {
        
        let precoIngresso;

        switch (categoriaJogo) {
            case 1:
                precoIngresso = 1320.00;
                break;
            case 2:
                precoIngresso = 880.00;
                break;
            case 3:
                precoIngresso = 330.00;
                break;
            case 4:
                precoIngresso = 170.00;
                break;
            default:
                console.log("ERRO.");
        };

        precoIngresso *= 4.10;
    
        const valorTotalIngressos = precoIngresso * quantidadeDeIngressos;
        console.log(
            `---Dados da compra--- 
            Nome do cliente:  ${nomeComprador};
            Tipo do jogo:  ${tipoDeJogo}; 
            Etapa do jogo: ${etapaCampeonato}; 
            Categoria:  ${categoriaJogo};
            Quantidade de Ingressos:  ${quantidadeDeIngressos}; 
            ---Valores--- 
            Valor do ingresso:  U${precoIngresso};
            Valor total:  U${valorTotalIngressos}`);
    }

    else if (etapaCampeonato === "FI") {

        let precoIngresso;

        switch (categoriaJogo) {
            case 1:
                precoIngresso = 1980.00;
                break;
            case 2:
                precoIngresso = 1320.00;
                break;
            case 3:
                precoIngresso = 880.00;
                break;
            case 4:
                precoIngresso = 330.00;
                break;
            default:
                console.log("ERRO.");
        };

        precoIngresso *= 4.10;
        
        const valorTotalIngressos = precoIngresso * quantidadeDeIngressos;

        console.log(
            `---Dados da compra--- 
            Nome do cliente:  ${nomeComprador};
            Tipo do jogo:  ${tipoDeJogo}; 
            Etapa do jogo: ${etapaCampeonato}; 
            Categoria:  ${categoriaJogo};
            Quantidade de Ingressos:  ${quantidadeDeIngressos}; 
            ---Valores--- 
            Valor do ingresso:  U${precoIngresso};
            Valor total:  U${valorTotalIngressos}`);
    } else {

        console.log('ERRO: "Caracteres não reconhecidos".');
    };
}

else if (tipoDeJogo === "DO") {

    if (etapaCampeonato === "DT") {

        let precoIngresso;

        switch (categoriaJogo) {
            case 1:
                precoIngresso = 660.00;
                break;
            case 2: 
                precoIngresso = 440.00;
                break;
            case 3:
                precoIngresso = 330.00;
                break;
            case 4:
                precoIngresso = 170.00;
                break;
            default: 
                console.log('ERRO.');
        };

        const valorTotalIngressos = precoIngresso * quantidadeDeIngressos;

        console.log(
            `---Dados da compra--- 
            Nome do cliente:  ${nomeComprador};
            Tipo do jogo:  ${tipoDeJogo}; 
            Etapa do jogo: ${etapaCampeonato}; 
            Categoria:  ${categoriaJogo};
            Quantidade de Ingressos:  ${quantidadeDeIngressos}; 
            ---Valores--- 
            Valor do ingresso:  R$${precoIngresso};
            Valor total:  R$${valorTotalIngressos}`);
    }

    else if (tipoDeJogo === "SF") {

        let precoIngresso;

        switch (categoriaJogo) {
            case 1:
                precoIngresso = 1320.00;
                break;
            case 2:
                precoIngresso = 880.00;
                break;
            case 3:
                precoIngresso = 550.00;
                break;
            case 4:
                precoIngresso = 220.00;
                break;
            default:
                console.log("ERRO.");
        };

        const valorTotalIngressos = precoIngresso * quantidadeDeIngressos;

        console.log(
            `---Dados da compra--- 
            Nome do cliente:  ${nomeComprador};
            Tipo do jogo:  ${tipoDeJogo}; 
            Etapa do jogo: ${etapaCampeonato}; 
            Categoria:  ${categoriaJogo};
            Quantidade de Ingressos:  ${quantidadeDeIngressos}; 
            ---Valores--- 
            Valor do ingresso:  R$${precoIngresso};
            Valor total:  R$${valorTotalIngressos}`);
    }

    else if (tipoDeJogo === "FI") {

        let precoIngresso;

        switch (categoriaJogo) {
            case 1:
                precoIngresso = 1980.00;
                break;
            case 2:
                precoIngresso = 1320.00;
                break;
            case 3:
                precoIngresso = 880.00;
                break;
            case 4:
                precoIngresso = 330.00;
                break;
            default:
                console.log("ERRO.");
        };

        const valorTotalIngressos = precoIngresso * quantidadeDeIngressos;

        console.log(
            `---Dados da compra--- 
            Nome do cliente:  ${nomeComprador};
            Tipo do jogo:  ${tipoDeJogo}; 
            Etapa do jogo: ${etapaCampeonato}; 
            Categoria:  ${categoriaJogo};
            Quantidade de Ingressos:  ${quantidadeDeIngressos}; 
            ---Valores--- 
            Valor do ingresso:  R$${precoIngresso};
            Valor total:  R$${valorTotalIngressos}`);

    } else {

        console.log('ERRO. "Caracteres não reconhecidos."');
    };

} else {
    console.log("Ocorreu um erro. Por favor, revise os dados.");
};

