import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { Product } from '../types/productType'

const table: string = "labecommerce_products"

export const createProduct = async(
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const {name, price, image_url} = req.body
        const productPrice: number = Number(price)
        if(!name || !price || !image_url) {
            res.statusCode = 422
            throw new Error("One of the fields is empty. Please, verify your request.")
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name, 
            price: productPrice,
            image_url
        }
        await connection(table)
        .insert(newProduct)
        res.status(201).send({message: "Product registered succesfully!"})
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}