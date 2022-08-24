import ProductDatabase from "../Data/ProductDatabase";
import ProductModel from "../Models/ProductModel";
import IdGenerator from "../services/IdGenerator";
import { newProductModel } from "../types/newProductDTO";
import { PRODUCTS_GENDER } from "../types/productInterface";

export default class ProductBussiness {
    constructor(
        private idGenerator: IdGenerator,
        private productDatabase: ProductDatabase
    ){}

    createProduct = async(input: newProductModel, token: string): Promise<void> => {
        const {photo, name, price, type, gender, description} = input

        if(!token) {
            throw new Error("You're not allowed to execute this action!")
        }

        if(!photo || !name || !price || !type || !gender || !description) {
            throw new Error("Only the description field can be empty. check you request for missing fields.")
        }

        const productPrice: number = +price

        const productGender = gender.toLowerCase()
        if(productGender !== PRODUCTS_GENDER.FEMALE && productGender !== PRODUCTS_GENDER.MALE) {
            throw new Error("This product department doesn't exist in system.")
        }

        const productId: string = this.idGenerator.createId()

        const newProduct: ProductModel = new ProductModel(productId, photo ,name, productPrice, type, gender, description)

        await this.productDatabase.insertNewProduct(newProduct)

    }

    getProductDetails = async(searchParam: string, token: string): Promise<ProductModel> => {
        if(!token) {
            throw new Error("You need an acess token to execute this action.")
        }

        if(!searchParam) {
            throw new Error("Send a search param to get a product's details.")
        }

        const productsDetails = await this.productDatabase.getDetails(searchParam)

        if(!productsDetails) {
            throw new Error("Couldn't find any product. Maybe it doesn't exists anymore, or it's a invalid search param.")
        }

        return productsDetails
    }
    
}