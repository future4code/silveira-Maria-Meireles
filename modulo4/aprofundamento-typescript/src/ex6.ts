type Consulta = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const listaDeConsultas: Array<Consulta> = []

const pacienteUm: Consulta = {
    nome: "João",
    idade: 23, 
    dataDaConsulta: "01/10/2021" 
}

const pacienteDois: Consulta = {
    nome: "Pedro",
    idade: 31, 
    dataDaConsulta: "02/07/2021"
}
const pacienteTres: Consulta = {
    nome: "Paula", 
    idade: 26, 
    dataDaConsulta: "03/11/2021" 
}

const pacienteQuatro: Consulta = {
    nome: "Márcia",
    idade: 45,
    dataDaConsulta: "04/05/2021"
}

listaDeConsultas.push(pacienteUm)
listaDeConsultas.push(pacienteDois)
listaDeConsultas.push(pacienteTres)
listaDeConsultas.push(pacienteQuatro)

// Não consegui escrever a função 