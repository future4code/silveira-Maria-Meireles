import ProductBussiness from "../Business/ProductBusiness";
import { Request, Response } from 'express'
import { newProductModel } from "../types/newProductDTO";

export default class ProductController {
    constructor(
        private productBusiness: ProductBussiness
    ){}

    createProduct = async(req: Request, res: Response):Promise<void> => {
        try{
            const{photo, name, price, type, gender, description} = req.body
            const token: string = req.headers.authorization as string
            console.log(token)

            const newProduct: newProductModel = {
                photo,
                name,
                price,
                type,
                gender,
                description
            }

            await this.productBusiness.createProduct(newProduct, token)

            res.status(201).send({message: "Product registered successfully!"})
        }catch(error: any) {
            res.send(error.message)
        }
    }

    getProductDetails = async(req: Request, res: Response): Promise<void> => {
        try {
            const searchParam: string = req.params.searchParam as string
            const token: string = req.headers.authorization as string


            const response = await this.productBusiness.getProductDetails(searchParam, token)

            res.status(200).send({details: response})

        } catch(error: any) {
            res.send(error.message)
        }
    }
}