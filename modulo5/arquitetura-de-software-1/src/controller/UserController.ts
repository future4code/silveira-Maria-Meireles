import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"
import { usertype, user } from "../types/userType"

export default class UserController {

    signUp = async(req: Request, res: Response): Promise<void> => {
        const {nome, email, password, role} = req.body

        try {
        const newUser: usertype = {
            nome,
            email,
            password,
            role
        }

        const userBusiness: UserBusiness = new UserBusiness()
        const response: Response = res
        const token: string = await userBusiness.signUp(newUser, response)

        res.status(201).send({message: "user created!", token})

    } catch(error: any){
        res.send(error.message)
    }
    }

    signIn = async(req: Request, res: Response) => {

        const {email, password} = req.body

        try {
            const loginData = {
                email,
                password
            }

            const userBusiness: UserBusiness = new UserBusiness()
            const response: Response = res 
            
            const token: string = await userBusiness.signIn(loginData, response)

            res.status(200).send({message: "Welcome!", token: token})

        } catch(error: any) {
            res.send(error.message)
        }
    }

    getAllUsers = async(req: Request, res: Response) => {
        const token: string = req.headers.authorization as string;

        try {
            const userBusiness: UserBusiness = new UserBusiness()
            const response: Response = res
            const allUsers: user[] = await userBusiness.getAllUsers(token, response)

            res.status(200).send({data: {Users: allUsers}})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    deleteUser = async(req: Request, res: Response) => {

        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string
        
        try{
            const input = {
                id,
                token
            }
            
           const response: Response = res 

            const userBusiness: UserBusiness =  new UserBusiness()
            await userBusiness.deleteUserById(input, response)

            res.status(200).send({message: "User deleted!"})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}