import { generateToken, getTokenData } from "../services/Authenticator";
import { idGenerator } from "../services/IdGenerator";
import { hashCreator, hashComparator } from "../services/HashManager";
import { usertype, user } from "../types/userType";
import UserDataBase from "../data/UserDataBase";
import User from "../models/UserModel";

export default class UserBusiness {
    signUp = async(user: usertype, res: any) => {
        const {nome, email, password, role} = user

        if(!nome || !email || !password || !role) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("There's a missing field. Please check your request.")
        }

        const userDatabase: UserDataBase = new UserDataBase()
        const userVerification = await userDatabase.verifyUserExistence(email)

        if(userVerification) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("This user already exists. You can't register twice.")
        }

        const id: string = idGenerator()
        const hashedPass: string = await hashCreator(password)

        const newUser: User = new User(
            id,
            nome,
            email,
            hashedPass,
            role
        )

        await userDatabase.insertUser(newUser)

        const token: string = generateToken({
            id,
            role
        })

        return token;
    } 

    signIn = async(loginData: {email: string, password:string}, res:any) => {
        const {email, password} = loginData

        if(!email || !password){
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("There's a missing field. Plase, check your request.")
        }

        const userDatabase: UserDataBase = new UserDataBase()
        const verifiedExistence = await userDatabase.verifyUserExistence(email)

        if(!verifiedExistence || email.includes("@") === false) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("Invalid credenialts.")
        }

        const comparedPass = await hashComparator(password, verifiedExistence.password)

        if(!comparedPass) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("Invalid credentials.")
        }

        const token = generateToken({

            id: verifiedExistence.id,
            role: verifiedExistence.role
        })

        return token;
    }

    getAllUsers = async(token: string, res: any): Promise<user[]> => {

        if(!token) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need an access token to execute this action.")
        }

        const userDatabase: UserDataBase = new UserDataBase()
        const usersList = userDatabase.getAllUsers()

        if(!usersList) {
            res.statusCode = 404;
            res.statusMessage = "Not Found"
            throw new Error("Any users found. :/")
        }

        return usersList;
    }
    
    deleteUserById = async(input: {id: string, token: string}, res: any): Promise<void> => {
        const {id, token} = input

        if(!token) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need an access token to execute this action.")
        }
        
        if(!id) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("You need to send the user's id to continue.")
        }

        const userDatabase: UserDataBase = new UserDataBase()
        const verifyUser = userDatabase.getUserById(id)

        if(!verifyUser){
            res.statusCode = 404;
            res.statusMessage = "Not Found"
            throw new Error("This user doesn't exist in our system.")
        }

        const tokenData = getTokenData(token)

        if(tokenData.role !== "admin") {
            res.statusCode = 403;
            res.statusMessage = "Forbidden"
            throw new Error("You're not allowed to execute this action.")
        }

        await userDatabase.deleteUser(id)
    }
}