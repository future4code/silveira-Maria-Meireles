import { Request, Response } from 'express'
import { connection } from '../data/connection'
import { Purchase } from '../types/purchaseType'

const table: string = "labecommerce_purchases"

export const getUserPurchases = async(
    req: Request,
    res: Response
):Promise<void> => {
    try{
        const userId: string = req.params.user_id as string

        if(!userId) {
            res.statusCode = 422
            throw new Error("The user id is missing.")
        }
        const userPurchases: Purchase[] = await connection(table)
        .select("id", "product_id", "quantity", "total_price")
        .where("labecommerce_purchases.user_id", userId)

        res.status(200).send(userPurchases)
    } catch(error: any) {
        res.send(error.message || error.sqlMessage)
    }
}
