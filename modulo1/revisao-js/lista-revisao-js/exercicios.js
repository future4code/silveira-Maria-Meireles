// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
   
};

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
};

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const listaDeNumeros = array;
    const apenasNumPar = listaDeNumeros.filter((item) => item % 2 === 0 );

    return apenasNumPar;
};

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const listaDePares = array.filter((numero) => numero % 2 === 0);
    const paresAoQuadrado = listaDePares.map((numeroPar) => numeroPar * numeroPar);
   
    return paresAoQuadrado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    maiorNumero = 0;
    for (numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero;
        };
    };
    return maiorNumero;
};

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objetoNumero = {};
    const maiorNumero = num1 > num2 ? num1 : num2;
    const menorNumero = num1 < num2 ? num1 : num2;
    const checaDivisibilidade = maiorNumero % menorNumero === 0;
    const diferenca = maiorNumero - menorNumero;

    objetoNumero["maiorNumero"] = maiorNumero;
    objetoNumero["maiorDivisivelPorMenor"] = checaDivisibilidade;
    objetoNumero["diferenca"] = diferenca;

        return objetoNumero;
};


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; i < n; i++) {
        numerosPares.push(i * 2);
    };

    return numerosPares;
};


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return `Equilátero`;
    }
    else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return `Isósceles`;
    }
    else if (ladoA !== ladoB && ladoB !== ladoC) {
        return `Escaleno`;
    };
};

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const listaEmCrescente = array.sort((numeroUm, numeroDois) => numeroUm - numeroDois);

    const segundoMenorNumero = listaEmCrescente[1];
    const segundoMaiorNumero = listaEmCrescente[listaEmCrescente.length - 2];

    return[segundoMaiorNumero, segundoMenorNumero];
};

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
};

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {...pessoa, nome: "ANÔNIMO"}
    return novaPessoa;
}
   

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}