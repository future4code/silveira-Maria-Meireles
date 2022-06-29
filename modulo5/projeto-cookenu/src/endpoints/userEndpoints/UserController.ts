import { Request, Response } from "express";
import UserData from "../../data/UserData/UserData";
import HashManager from "../../sevices/hashServices/HashManager";
import IdGenerator from "../../sevices/idServices/IdGenerator";
import User from "../../models/User";
import Authenticator from "../../sevices/tokenServices/Authenticator";
import { authenticationData } from "../../types/authenticationData";


export default class UserController{

    createNewUser = async (req: Request, res: Response): Promise<any> => {

        const {nome, email, password} = req.body 
        try{ 

        if(!nome || !email || !password) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("One of the fields is missing. Please, check your request.")
        }

        if(password.length < 6) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("Your password must have more than six characters.")
        }

        if(email.includes("@") === false) {

            res.statusCode = 406;
            res.statusMessage = "Not Acceptable";
            throw new Error("Invalid credentials.")
        }

        const userData: UserData = new UserData()
        const userVerified =  await userData.verifyUserExistence(email)
        
        if(userVerified) {
            res.statusCode = 422;
            res.statusMessage = "Unprocessable entity"
            throw new Error("Invalid Credentials")
        }

        const idGenerator: IdGenerator = new IdGenerator()
        const id = idGenerator.generateId()
        
        const hashManager: HashManager = new HashManager()
        const hashedPass: string = hashManager.generateHash(password)

        const user = new User(id, nome, email, hashedPass)

        await userData.createNewUser(user)

        const payload: authenticationData = {
            id: user.getUserId()
        }

        const authenticator: Authenticator = new Authenticator()
        const token: string = authenticator.generateToken(payload)

        res.status(201).send({message: "User created!", token: token})

    } catch(error: any) {
        res.send(error.message)
    }
    } 

    userSignIn = async(req: Request, res: Response): Promise<void> => {

        const {email, password} = req.body 
        try {

            if(!email || !password) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("Please send both email and password fields.")
            }

            const userData: UserData = new UserData()
            const verifiedUser = await userData.verifyUserExistence(email)

            if(!verifiedUser || email.includes("@") === false) {
                res.statusCode = 401;
                res.statusMessage = "Unauthorized"
                throw new Error("Invalid crerentials.")
            }

            const hashManager: HashManager = new HashManager()

            const verifiedPass = hashManager.compareHash(password, verifiedUser.password)

            if(!verifiedPass) {
                res.statusCode = 404;
                res.statusMessage = "Not Found"
                throw new Error("Invalid credentials")
            }

            const payload: authenticationData = {
                id: verifiedUser.id
            }
            const token = new Authenticator().generateToken(payload)

            res.status(200).send({message: "Welcome!", token: token})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}