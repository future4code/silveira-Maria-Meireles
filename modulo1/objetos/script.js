/* 
    Exercícios de interpretação de código:

    1.a) Os consoles irão imprimir: Matheus Nachtergaele;
                                    Virgínia Cavendish;
                                    {canal: "Globo", horario: "14h"}.
    
    
    2.a) Os consoles irão imprimir: {nome: "Juca", idade: 3, raca: "SRD"};
                                    {nome: "Juba", idade: 3, raca: "SRD"};
                                    {nome: "Jubo", idade: 3, raca: "SRD"}.
    
    b) Três pontos é a sintaxe para o spread. Ele faz a cópia de um objeto ou de uma lista,
       fazendo com que possamos fazer alterações nas propriedades dessa cópia, adicionar mais elementos,
       ou realocá-la em outro lugar, sem interferir no objeto original. 

    3.a) O primeiro console irá imprimir um false, e o segundo acho que será "undefined".
    b) O primeiro console funcionou porque o objeto pessoa foi passado para a função, seguido da propriedade para ser acessada.
       No return dentro da função, a sintaxe para acessar uma propriedade foi completa.
       O segundo retornará undefined porque essa propriedade não existe, e não oassamos nenhum valor para criá-la.  
*/ 

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)

// a)
const apelidosParaChamar = (objeto) => console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);


const pessoa = {
    nome: "Maria Eduarda",
    apelidos: ["Duda", "Edu", "Maria"]
};

apelidosParaChamar(pessoa);

// b)
const novaPessoa = {
    ...pessoa,
    nome: "Camila",
    apelidos: ["Camis", "Mila", "Caca"]
};

apelidosParaChamar(novaPessoa);


// 2) 

// a & b)
const listaDeDadosPersonas = (objeto) => [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length];

const personaUm = {
    nome: "André",
    idade: 32,
    profissao: "Professor"
};

const personaDois = {
    nome: "Marisa",
    idade: 32,
    profissao: "Chef culinária" 
};

console.log(listaDeDadosPersonas(personaUm));
console.log(listaDeDadosPersonas(personaDois));


// 3)

// a)
const colocaFrutasNoCarrinho = (fruta) => carrinho.push(fruta);

var carrinho = [];

const primeiraFruta = {
    nome: "Ameixa Vermelha",
    disponibilidade: true
};

const segundaFruta = {
    nome: "Banana",
    disponibilidade: true
};

const terceiraFruta = {
    nome: "Kiwi",
    disponibilidade: true
};

colocaFrutasNoCarrinho(primeiraFruta);
colocaFrutasNoCarrinho(segundaFruta);
colocaFrutasNoCarrinho(terceiraFruta);

console.log(carrinho);


// DESAFIOS: 

// 1)
const criarPessoa = () => {
    const nome = prompt("Qual é o seu nome?");
    const idade = +prompt("Quantos anos você tem?");
    const profissao = prompt("Em quê você trabalha?");
    const pessoa = {nome, idade, profissao};

    console.log(pessoa);
    console.log(typeof pessoa);

};

criarPessoa();

// 2)
const verificaAnoDeLancamento = (filmeUm, filmeDois) => `O primeiro filme foi lançado antes do segundo? ${filmeUm.anoDeLancamento < filmeDois.anoDeLancamento}`;

const primeiroFilme = {
    nome: "Tudo sobre minha mãe",
    anoDeLancamento: 1999
};

const segundoFilme = {
    nome: "O advogado do diabo",
    anoDeLancamento: 1997
};

console.log(verificaAnoDeLancamento(primeiroFilme, segundoFilme));


// 3) Continuação do exercício 3 de escrita

const disponibilidadeDasFrutas = (fruta) => {

    fruta["disponibilidade"] = false;

    return fruta;
}
console.log(disponibilidadeDasFrutas(primeiraFruta));


