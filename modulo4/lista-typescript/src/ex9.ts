const verificarQuantidadeDeAnagramas = (palavra: string):number => {
    const numeroParaFatorar: number = palavra.length;
    let totalDeAnagramas: number = numeroParaFatorar;

    for (let i = 1; i < numeroParaFatorar; i++) {
        totalDeAnagramas *= i
    }
    return totalDeAnagramas;
}

console.log(verificarQuantidadeDeAnagramas("Bananinha"))