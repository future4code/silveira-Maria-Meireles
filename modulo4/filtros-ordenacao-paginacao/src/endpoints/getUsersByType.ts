import express, { Request, Response } from 'express'
import { connection } from '../data/connection'
import { User } from '../types'

const table = "aula49_exercicio";

export const getUsersByType = async(
    req: Request,
    res: Response
): Promise<void> => {
    const userType: string = req.params.type as string
    
    try {
        const users = await getUsers(userType)

        if(users.length < 1) {
            res.statusCode = 404;
            throw new Error("Any users were found. Please check the params field.")
        } 
        res.status(200).send({data: users})
    } catch(error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const getUsers = async(type: string):Promise<any> => {
    const result = await connection(table)
    .select("*").where('type', 'LIKE', `${type}`)
    return result;
}