import { Request, Response } from "express";
import UserData from "../../data/UserData/UserData";
import HashManager from "../../sevices/hashServices/HashManager";
import IdGenerator from "../../sevices/idServices/IdGenerator";
import User from "../../models/User";
import Authenticator from "../../sevices/tokenServices/Authenticator";
import { authenticationData } from "../../types/authenticationData";
import IntermediateModel from "../../models/IntermediateModel";


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

    getUserByToken = async(req: Request, res: Response): Promise<void> => {

        const token: string = req.headers.authorization as string
        try{
            if(!token) {
                res.statusCode = 404;
                res.statusMessage = "Not found"
                throw new Error("Couldn't get the user Token.")
            }

            const authenticator: Authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token)

             const userData: UserData = new UserData()
             const userResult = await userData.getUserById(tokenData.id)

             if(!userResult) {
                res.statusCode = 404;
                res.statusMessage = "Not found"
                throw new Error("We couldn't find this user in our database.")
            }

            const user = {
                id: userResult.id,
                nome: userResult.nome,
                email: userResult.email
            }

            res.status(200).send({data: {user: user}})
        } catch(error: any) {
            res.send(error.message)
        }
    }

        getUserById = async(req: Request, res: Response): Promise<void> => {

            const id: string = req.params.id as string;
            const token: string = req.headers.authorization as string;

            try{
                if(!id) {
                    res.statusCode = 406;
                    res.statusMessage = "Not Acceptable"
                    throw new Error("You need to send an id to get a user.")
                }

                if(!token) {
                    res.statusCode = 404;
                    res.statusMessage = "Not Found"
                    throw new Error("You need your access token to get this information.")
                }

                const userData: UserData = new UserData()
                const verifiedUser = await userData.getUserById(id)

                if(!verifiedUser) {
                    res.statusCode = 404;
                    res.statusMessage = "Not found"
                    throw new Error("We couldn't find this user.")
                }

                const user = {
                    id: verifiedUser.id,
                    name: verifiedUser.nome,
                    email: verifiedUser.email
                }
                
                res.status(200).send({data: {user: user}})
            } catch(error: any) {
                res.send(error.message)
            }
        }

        followUser = async(req: Request, res: Response): Promise<void> => {

            const token: string = req.headers.authorization as string
            const id: string = req.body.id as string

            try{
                if(!id) {
                    res.statusCode = 406;
                    res.statusMessage = "Not Acceptable"
                    throw new Error("You need to send the user's id.")
                }

                if(!token) {
                    res.statusCode = 401;
                    res.statusMessage = "Unauthorized"
                    throw new Error("You need to login to execute this action.")
                }

                const authenticator: Authenticator = new Authenticator()
                const tokenData = authenticator.getTokenData(token)
                
                
                const userData: UserData = new UserData();
                
                const followedUser = await userData.getUserById(id)

                if(!followedUser) {
                    res.statusCode = 404;
                    res.statusMessage = "Not Found"
                    throw new Error("This user doesn't exist.")
                }

                const intermediateModel: IntermediateModel = new IntermediateModel(tokenData.id, followedUser.id)

                userData.followUser(intermediateModel)

                res.status(201).send({message: "User followed!"})
            } catch(error: any) {
                res.send(error.message)
            }
        }
}