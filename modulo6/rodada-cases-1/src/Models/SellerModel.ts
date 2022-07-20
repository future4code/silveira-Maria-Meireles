export default class SellerModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ){}

    public getSellersId = (): string => {
        return this.id
    }

    public getSellersName = (): string => {
        return this.name
    }

    public getSellersEmail = (): string => {
        return this.email
    }

    public getSellersPassword = (): string => {
        return this.password
    }
}