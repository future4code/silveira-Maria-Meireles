import { Request, Response } from 'express'
import {connection} from '../data/connection'
import { User } from '../types/userType'

const table: string = "labecommerce_users"

export const getAllUsers = async(
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const users: User[] = await connection(table)
        .select("*")

        if(users.length < 1 || !users) {
            res.statusCode = 404;
            throw new Error("No users were found, please check the request.")
        }
        res.status(200).send({data: users})
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
