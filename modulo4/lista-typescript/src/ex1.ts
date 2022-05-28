const montarCumprimento = (nome: string, dataNascimento: string):string => {
    const dataSeparada: string[] = dataNascimento.split("/")

    return `Olá, meu nome é ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]}, do ano ${dataSeparada[2]}.`
}

console.log(montarCumprimento("Maria Eduarda", "20/09/2001"))