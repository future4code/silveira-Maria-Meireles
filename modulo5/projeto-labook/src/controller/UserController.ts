import { Request, Response } from 'express'
import UserBusiness from '../business/UserBusiness'
import { postType } from '../types/postType';
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

    addFriendship = async(req: Request, res: Response):Promise<void> => {
        const id:string = req.params.id as string;
        const token: string = req.headers.authorization as string

        try {
            const data = {
                id,
                token
            }

            const response: Response = res

            const userBusiness = new UserBusiness()
            await userBusiness.addNewFriend(data, response)

            res.status(201).send({message: "Friendship registered!"})
        }catch(error: any) {
            res.send(error.message)
        }
    }

    removeFriend = async(req: Request, res: Response): Promise<void> => {
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string

        try  {
            const data = {
                id,
                token
            }

            const response: Response = res

            const userBusiness = new UserBusiness()
            await userBusiness.removeFriend(data, response)

            res.status(200).send({message: "Friend removed."})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    getUserFeed = async(req: Request, res: Response): Promise<void> => {
        const token: string = req.headers.authorization as string

        try {
            const userBusiness = new UserBusiness()
            const response: Response = res

            const postsList: postType[] = await userBusiness.getUsersFeed(token, response)

            res.status(200).send({data: postsList})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}