import { Request, Response } from 'express'
import BaseDatabase from '../data/BaseDatabase';
import UserData from '../data/UserData'
import User from '../models/User'
import Authenticator from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';
import { authenticationData } from '../types/authenticationType';


export default class Usercontroller extends IdGenerator{

    async createUser(req: Request, res: Response) {
        try{
            const {email, password} = req.body

            if(!email || email.includes("@") === false) {
                res.statusCode = 422;
                throw new Error('The email field was empty or in a incorrect format. Please, check if it contains a @.')
            }
             if(!password || password.length < 6) {
                res.statusCode = 422;
                throw new Error( "The password field was empty or it doesn't contains the minimum characters. Send a password larget than 6.")
            }

            const userData = new UserData()
            const userVerification = await userData.verifyUserExistance(email)
         
            if(userVerification) {
                res.statusCode = 409;
                throw new Error("This email has already been registered.")
            }

            const id: string = new IdGenerator().generateId()
            const user: User = new User(id, email, password)

            await userData.insertUser(user)

            const payload: authenticationData = {
                id: user.getUserId()
            }
            const token = new Authenticator().generateToken(payload)
            res.status(201).send({token: token})

        } catch(error: any) {
            res.send({ message: error.message})
        }
    }

    async signIn(req: Request, res: Response) {
        try {
            const {email, password} = req.body;

            if(!email || email.includes("@") === false) {
                res.statusCode = 422;
                throw new Error("The email field was empty or in a incorrect format. Please, check if it contains a @.")
            }
            if(!password) {
                res.statusCode = 422;
                throw new Error("Send your password.")
            }

            const userData: UserData = new UserData()
            const userVerification = await userData.verifyUserExistance(email)

            if(!userVerification) {
                res.statusCode = 404;
                throw new Error("You aren't registered yet.")
            }

            if(password !== userVerification.password) {
                res.statusCode = 409;
                throw new Error("The password doesn't match, please check.")
            }

            const payload: authenticationData = {
                id: userVerification.id
            }
            const token = new Authenticator().generateToken(payload)

            res.status(200).send({message: "Welcome!", token: token})
        } catch(error: any) {
            res.send({message: error.message})
        }
    }

    async getUser(req: Request, res: Response) {
        try{
            const token = req.headers.authorization as string;

            if(!token) {
                res.statusCode = 422;
                throw new Error("Invalid token.")
            }

            const authenticator = new Authenticator()
            const authenticationData = authenticator.getTokenData(token)
            const userData: UserData = new UserData();
            const userResult = await userData.getUserById(authenticationData.id);
       
            if(!userResult) {
                res.statusCode = 404;
                throw new Error("Sorry, this user doesn't existe in our database.")
            }
            res.status(200).send({message: "Success!", data: userResult})
        } catch(error: any) {
            res.send({message: error.message})
        }
    }
}