export default class CustomError extends Error {
    protected statusCode: number
    
    constructor(
        statusCode = 400,
        message: string
    ){
        super(message)
        this.statusCode = statusCode
    }
}