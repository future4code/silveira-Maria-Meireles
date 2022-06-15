import { Request, Response } from 'express'
import { Address } from '../data/types';
import axios from 'axios'

export const getAddress = async(
    req: Request,
    res: Response
):Promise<any> => {
    try {
        const cep: string = req.params.cep as string;
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        if(!result) {
            res.statusCode = 404;
            throw new Error("CEP inválido. Por favor, verifique o valor inserido.")
        }
        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        res.status(200).send({data: address})
    } catch(error: any) {
        res.send(error.message)
    }
} 