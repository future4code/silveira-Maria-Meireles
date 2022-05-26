// a)
const minhaString: string = 'Brigadeiro'
// Caso eu tente atribuir um valor numérico à essa variável,
// um erro é retornado dizendo que não podemos atribuir 'number' à um tipo 'string'.

// b)
const meuNumero: number = 10;
// Para aceitarmos mais de um tipo de dado, usaremos o union type:
const meuSegundoNumero: number | string = "Vinte e cinco"

// c)

enum CoresDoArcoIris {
    VERMELHO = 'Vermelho',
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    ROXO = "Roxo"
}

type Pessoa = {
    name: string,
    idade: number,
}

type Person = Pessoa & {
    corFavorita: CoresDoArcoIris
}

const pessoaUm: Person = {
    name: "Marta",
    idade: 42,
    corFavorita: CoresDoArcoIris.VERMELHO
}

const pessoaDois: Person = {
    name: "Maria Eduarda",
    idade: 20,
    corFavorita: CoresDoArcoIris.ROXO
}

const pessoaTres: Person = {
    name: "Enedina",
    idade: 82,
    corFavorita: CoresDoArcoIris.ANIL
}