enum Setores {
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro",
    MARKETING = "Marketing"
}
type Funcionario = {
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
}

const listaDeFuncionarios: Funcionario[] = [
	{ nome: "Marcos", salario: 2500, setor: Setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: Setores.FINANCEIRO, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: Setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: Setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: Setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: Setores.MARKETING, presencial: true }
]

const separaFuncionariosMarketing = (array: Array<Funcionario>): Array<{}> => {
 const funcionarios = array.filter((array) => {
     return array.setor === "Marketing" && array.presencial === true
 })
 return funcionarios
}

console.log(separaFuncionariosMarketing(listaDeFuncionarios))