import { Request, Response } from 'express'
import UserBusiness from '../business/UserBusiness'
import { userInput } from '../types/userInput';

export default class UserController {
    createUser = async(req: Request, res: Response): Promise<void> => {
        try{
            const {name, email, password, role} = req.body;
            
            const newUser: userInput = {
                name,
                email, 
                password,
                role
            }
            const response: Response = res

            const userBusiness: UserBusiness = new UserBusiness()
            const token = await userBusiness.createUser(newUser, response)

            res.status(201).send({message: "User created!", token})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    signIn = async(req: Request, res: Response):Promise<void> => {

        const {email, password} = req.body

        try{
            const loginData = {
                email,
                password
            }
            const response: Response = res

            const userBusiness: UserBusiness = new UserBusiness()
            const token = await userBusiness.signIn(loginData, response)

            res.status(200).send({message: "Welcome!", token})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}