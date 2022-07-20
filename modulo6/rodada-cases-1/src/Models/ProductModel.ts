export default class ProductModel {
    constructor(
        private id: string,
        private photo: string,
        private name: string,
        private price: number,
        private type: string,
        private gender: string,
        private description: string
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

    public getProductsDescription = (): string => {
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