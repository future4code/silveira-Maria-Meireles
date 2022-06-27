export type Address = {
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
}

export type FullAddress = {
    cep: number,
    logradouro: string,
    numero: number,
    complemento: string | undefined,
    bairro: string,
    cidade: string,
    estado: string
}