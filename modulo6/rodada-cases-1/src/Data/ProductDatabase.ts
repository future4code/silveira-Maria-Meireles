import ProductModel from "../Models/ProductModel";
import BaseDatabase from "./BaseDatabase";

export default class ProductDatabase extends BaseDatabase {
    private tableName: string = "amaro_products"

    insertNewProduct = async(product: ProductModel): Promise<void> => {
        try {
            await this.getConnection()
            .insert({
                id: product.getProducstId(),
                photo: product.getProductsPhoto(),
                name: product.getProductsName(),
                description: product.getProductsDescription(),
                price: product.getProductsPrice(),
                type: product.getProductsType(),
                gender: product.getProductsGender()
            })
            .into(this.tableName)

        } catch(error: any) {
            console.log(error.message || error.sqlMessage)
        }
    }

    getDetails = async(searchParam: string): Promise<ProductModel> => {

        const [[verificationResult]] = await this.getConnection().raw(
            `
            SELECT * FROM ${this.tableName}
            WHERE id = "${searchParam}" 
            OR name = "${searchParam}"
            OR price = "${searchParam}"
            `
        )

        return verificationResult
    }
}