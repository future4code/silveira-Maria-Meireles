const mostraTipoDeVariavel = (variavel: any):void => {
    let tipoDaVariavel = typeof(variavel)
    console.log(`Essa variável é uma ${tipoDaVariavel}.`)
}

const palavra: string = "Testando"
mostraTipoDeVariavel(palavra)