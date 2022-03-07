
/*
    Exercícios de interpretação de código:

    1.a) {nome: "Amanda Rangel", apelido: "Mandi"}
         0
        => (3) [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" } ]

        {nome: "Laís Petra", apelido: "Laura"}
        1
        => (3) [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" } ]
        
        {nome: "Letícia Chijo", apelido: "Chijo"}
        2
        => (3) [
            { nome: "Amanda Rangel", apelido: "Mandi" },
            { nome: "Laís Petra", apelido: "Laura" },
            { nome: "Letícia Chijo", apelido: "Chijo" } ]


    2) => (3) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]


    3) => (2) [
        {nome: "Amanda Rangel", apelido: "Mandi"},
        {nome: "Laís Petra", apelido: "Laura"}
    ]

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)
// a)
const pets = [
    {nome: "Lupin", raca: "Salsicha"},
    {nome: "Polly", raca: "Lhasa Apso"},
    {nome: "Madame", raca: "Poodle"},
    {nome: "Quentinho", raca: "Salsicha"},
    {nome: "Fluffy", raca: "Poodle"},
    {nome: "Caramelo", raca: "Vira-Lata"}
];

const listaDeNomesPets = pets.map((item) => item.nome);

console.log(listaDeNomesPets);


// b)
const listaDeDogsSalsicha = pets.filter((item) => item.raca === "Salsicha");

console.log(listaDeDogsSalsicha);


// c)
const listaDePoodles = pets.filter((item) => item.raca === "Poodle");
const promoParaPoodles = listaDePoodles.map((item) => `Você ganhou uma promoção para tosar o/a ${item.nome}`);

console.log(promoParaPoodles);


// 2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ];

// a) 
const nomeDosProdutos = produtos.map((produto) => produto.nome);
console.log(nomeDosProdutos);


// b)
const produtosEprecos = produtos.map((produto) => {
    const calculaOdesconto = produto.preco - (5 / 100) * produto.preco;
    const produtosComDesconto = {nome: produto.nome, preco: calculaOdesconto};
    return produtosComDesconto;
});
console.log(produtosEprecos);


// c) 
const listaDeBebidas = produtos.filter((bebida) => bebida.categoria === "Bebidas");

console.log(listaDeBebidas);


// d)
const produtosYpe = produtos.filter((produto) => produto.nome.includes("Ypê"));
console.log(produtosYpe);


// e) 
const propagandaYpe = produtosYpe.map((produto) => `Compre ${produto.nome} por ${produto.preco}.`);
console.log(propagandaYpe);


// DESAFIOS: 

// 1)
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
];

const nomesPokemons = pokemons.map((pokemon) => pokemon.nome);
const pokemonsOrdemAlfabetica = nomesPokemons.sort();

console.log(pokemonsOrdemAlfabetica);

// 2)

