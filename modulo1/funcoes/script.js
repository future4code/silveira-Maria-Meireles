/*
    EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

    1.a) O primeiro irá imprimir 10, e o segundo 50.

      b) A função executaria e retornaria o valor, mas ele iria se perder,
         já que não foi criada uma variável para armazenar. E sem o console, o resultado
         da função também não seria mostrado.
         

    2.a) A função pega o texto que for passado para o parâmetro, converte ele em letras
         minúsculas, e depois checa a ocorrência da palavra "cenoura".
         A utilidade de uma função como essa poderia ser buscar por um termo em um texto grande,
         ou até mesmo dentro de uma lista. O uso do toLowerCase() é para certificar que a palavra buscada
         fique igual à passada no "includes", fazendo com que ele possa detectá-la.

      b) i. true;
         ii. true;
         iii. false.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO:

// 1)
// a)
const infoSobreMim = () => console.log("Eu sou a Maria Eduarda, tenho 20 anos, moro em Juiz de fora e sou estudante Labenu.");

infoSobreMim();

// b)
const infoUsuario = (nome, idade, cidade, profissao) => `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;

console.log(infoUsuario("Camila", 22, "São Paulo", "arquiteta"));


// 2)
// a)
const somar = (numero1, numero2) => numero1 + numero2;

const resultadoSoma = somar(20, 30);

console.log(resultadoSoma);

// b)
const verificarPrimeiroNumero = (numero1, numero2) => numero1 >= numero2;

console.log(verificarPrimeiroNumero(2, 4));

// c)
const verificaParidade = (numero) => numero % 2 === 0;

console.log(verificaParidade(10));

// d)
const AlteraString = (mensagem) => {

    const mensagemEmMaiusculo = mensagem.toUpperCase();
    
    console.log(mensagemEmMaiusculo, mensagemEmMaiusculo.length);
}

AlteraString("Melancia");


// 3)
const soma = (numero1, numero2) => numero1 + numero2;

const subtrai = (numero1, numero2) => numero1 - numero2;

const multiplica = (numero1, numero2) => numero1 * numero2;

const divide = (numero1, numero2) => numero1 / numero2;

const numeroUmDoUsuario = +prompt("Insira um número para fazer os cálculos");
const numeroDoisDoUsuario = +prompt("Insira um segundo número");

const resultadoDaSoma = soma(numeroUmDoUsuario, numeroDoisDoUsuario);
const resultadoSubtracao = subtrai(numeroUmDoUsuario, numeroDoisDoUsuario);
const resultadoMultiplicacao = multiplica(numeroUmDoUsuario, numeroDoisDoUsuario);
const resultadoDivisao = divide(numeroUmDoUsuario, numeroDoisDoUsuario);

console.log( `Números inseridos: ${numeroUmDoUsuario} e ${numeroDoisDoUsuario}
            Soma: ${resultadoDaSoma}
            Diferença: ${resultadoSubtracao}
            Multiplicação: ${resultadoMultiplicacao}
            Divisão: ${resultadoDivisao}`);


// DESAFIOS: 

// 1)
// a)
const mostraParametro = (parametro) => console.log(parametro);

const somaParametros = (parametro1, parametro2) => {

    const soma = parametro1 + parametro2;
    mostraParametro(soma);
}

somaParametros(4, 6);

// b)
const calcTeoremaDePitagoras = (cateto1, cateto2) => {
    const expoenteCateto1 = cateto1 * cateto1;
    const expoenteCateto2 = cateto2 * cateto2;
    const hipotenusa = expoenteCateto1 + expoenteCateto2;
    
    return hipotenusa;
}

const resultadoHipotenusa = calcTeoremaDePitagoras(3, 4);

console.log(resultadoHipotenusa);



