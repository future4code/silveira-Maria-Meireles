export type Client = {
    name: string,
    cpf: number,
    dateOfBirth: string,
    balance: number
    transations: bankStatement[] | []
}

export type bankStatement = {
    value: number,
    date: string | number,
    description: string
}

export const clientsList: Client[] = [
    {
        name: "Maria Clara",
        cpf: 11111111111,
        dateOfBirth: "11/02/1988",
        balance: 2000,
        transations: []
    },
    {
        name: "Cláudio",
        cpf: 22222222222,
        dateOfBirth: "20/05/1975",
        balance: 10000,
        transations: [
            {
                value: 150,
                date: "02/06/2022",
                description: "Conta de luz Cemig"
            }
        ]
    },
    {
        name: "Paula",
        cpf: 33333333333,
        dateOfBirth: "05/09/2000",
        balance: 34000,
        transations: [
            {
                value: 110.00,
                date: "29/05/2022",
                description: "Conta de internet residencial."
            },
            {
                value: 3000,
                date: "02/06/2022",
                description: "Parcela do carro (4/20)"
            }
        ]
    },
    {
        name: "Jorge",
        cpf: 44444444444,
        dateOfBirth: "06/06/2001",
        balance: 100,
        transations: []
    }
]