import {Request, Response } from 'express'
import { connection } from '../data/connection'
import { Purchase } from '../types/purchaseType'

const table: string = "labecommerce_purchases"

const getPrice = async(product_id: string) => {
    const productPrice = await connection
    .select("price")
    .from("labecommerce_products")
    .where("labecommerce_products.id", product_id)
    return productPrice[0].price
}

export const registerPurchase = async(
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const{user_id, product_id, quantity} = req.body
        const price = await getPrice(product_id)
        const productQuantity: number = Number(quantity)
        console.log(productQuantity)
        const total_price: number = price * productQuantity;

        if(!user_id || !product_id || !quantity) {
            res.statusCode = 422;
            throw new Error("One of the fields is missing. Please check the send data.")
        }
        const newPurchase: Purchase = {
            id: Date.now().toString(),
            user_id,
            product_id,
            quantity: productQuantity,
            total_price
        }
        await connection(table)
        .insert(newPurchase)

        res.status(200).send({message: "Purchase registered successfully!"})
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

