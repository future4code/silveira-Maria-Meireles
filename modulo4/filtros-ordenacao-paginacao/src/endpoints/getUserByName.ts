import express, {Request, Response} from 'express'
import { connection } from '../data/connection'

const table = "aula49_exercicio";

export const getUserByName = async(
    req: Request,
    res: Response
): Promise<void> => {
    const userName: string = req.query.name as string
    try {
        const user = await getUser(userName)

        if(user.length === 0) {
            res.statusCode = 404
            throw new Error("User not found, please check the query field.")
        }
        res.status(200).send({data: user})
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

const getUser = async(userName: string): Promise<any> => {
    const result = await connection(table)
    .select("*").where('name', 'LIKE', `%${userName}%`)
    return result;
}