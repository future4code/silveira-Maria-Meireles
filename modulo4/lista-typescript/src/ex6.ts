import { convertTypeAcquisitionFromJson } from "typescript"

type TemplateCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: Array<number>
}

const clientesBanco: TemplateCliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const checarNecessidadeDeEmprestimo = (clientes: Array<TemplateCliente>) => {
	clientes.forEach((cliente) => {
		const totalDebitos: number = cliente.debitos.reduce((a, b) => a + b, 0)
		cliente.saldoTotal -= totalDebitos
	})
	const negativados = clientes.filter((cliente) => {
		return cliente.saldoTotal < 0
	})
	return negativados;
}

console.log(checarNecessidadeDeEmprestimo(clientesBanco))