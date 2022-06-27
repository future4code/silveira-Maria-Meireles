import { Request, response, Response } from 'express'
import { connection } from '../data/connection'
import { Product } from '../types/productType'

const table: string = "labecommerce_products"

export const getAllProducts = async(
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const products: Product[] = await connection(table)
        .select("*")

        if(products.length === 0) {
            res.statusCode = 404;
            throw new Error("The product's list is empty.")
        } 
        if(!products) {
            res.statusCode = 404;
            throw new Error("Any products were foound. Please, check your request.")
        }
        res.status(200).send({data: products})
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}