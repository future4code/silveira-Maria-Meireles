import { PRODUCTS_GENDER, PRODUCTS_TYPES } from "../types/productInterface";

export default class ProductModel {
    constructor(
        private id: string,
        private photo: string,
        private name: string,
        private description: string | undefined,
        private price: number,
        private type: PRODUCTS_TYPES,
        private gender: PRODUCTS_GENDER
    ){}

    public getProducstId = (): string => {
        return this.id
    }

    public getProductsPhoto = (): string => {
        return this.photo
    }

    public getProductsName = (): string => {
        return this.name
    }

    public getProductsDescription = (): string | undefined => {
        return this.description
    }

    public getProductsPrice = (): number => {
        return this.price
    }

    public getProductsType = (): string => {
        return this.type
    }

    public getProductsGender = (): string => {
        return this.gender
    }
}