import SellerBusiness from "../Business/SellerBusiness";
import { Request, Response } from 'express'
import { sellerInput } from "../types/sellerInterface";
import { loginModel } from "../types/loginDTO"

export default class SellerController {
    constructor(
        private sellerBusiness: SellerBusiness
    ){}

    signUp = async(req: Request, res: Response): Promise<void> => {
        try {
            const {name, email, password} = req.body

            const newSeller: sellerInput = {
                name, 
                email,
                password
            }

            const token: string = await this.sellerBusiness.signUp(newSeller)

            res.status(201).send({message: "Seller registered on system!", token})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    signIn = async(req: Request, res: Response): Promise<void> => {
        try {
            const {email, password} = req.body

            const login: loginModel = {
                email,
                password
            }

            const token = await this.sellerBusiness.signIn(login)

            res.status(200).send({token: token})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}