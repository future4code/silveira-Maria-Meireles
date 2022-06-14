import express, {Request, Response} from 'express'
import { connection } from '../data/connection'

const table = "aula49_exercicio"
export const getAllUsers = async(
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const users = await selectAllUsers()

        if(!users.length) {
            res.statusCode = 404
            throw new Error("No users found. :(")
        }
        res.status(200).send(users)
    } catch(error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

async function selectAllUsers(): Promise<any> {
    const result = await connection(table)
    .select("*").from(table)
    return result
}