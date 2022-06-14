import express, {Request, Response} from 'express'
import { connection } from '../data/connection'

const table = "aula49_exercicio";

export const getOrderedUsers = async(
    req: Request,
    res: Response
):Promise<void> => {
    let sortingParameter: string = req.query.sort as string
    let order: string = req.query.order as string
    try {
        if(sortingParameter !== "name" && sortingParameter !== "type") {
            sortingParameter = "email"
        }
        if(order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "ASC"
        }
        const orderedUsers = await sortResults(sortingParameter, order);
        res.status(200).send({data: orderedUsers})
    } catch(error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const sortResults = async(sort: string, order: string): Promise<any> => {
    const result = await connection(table)
    .select("*").from(table)
    .orderBy(sort, order)

    return result;
}
