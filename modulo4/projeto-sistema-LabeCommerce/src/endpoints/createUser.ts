import { Request, Response } from 'express';
import { connection } from "../data/connection";
import { User } from "../types/userType";

const table: string = "labecommerce_users" 

export const createUser = async(
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            res.statusCode = 422;
            throw new Error("One of the fields is empty. Please verify.")
        }
        const NewUser: User = {
            id: Date.now().toString(),
            name,
            email,
            password
        }
        await connection(table)
        .insert(NewUser)
        res.status(201).send({message: "User created sucessfully!"})
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}