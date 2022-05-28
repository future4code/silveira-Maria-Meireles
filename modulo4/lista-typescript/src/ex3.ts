enum Genero {
    ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const mostrarFilme = (
    nome: string, 
    anoLancamento: number | string,
    genero: Genero,
    rottenTomatoes?: number | string
    ) => {

        type FilmeTemplate = {
            nome: string,
            anoDeLancamento: number | string,
            genero: Genero,
            rottenTomatoes: number | string | undefined
        }

        const Filme: FilmeTemplate = {
            nome: nome,
            anoDeLancamento: anoLancamento,
            genero: genero,
            rottenTomatoes: rottenTomatoes
        }

        return Filme;
}

console.log(mostrarFilme("Pulp Fiction", 1994, Genero.DRAMA, 92))