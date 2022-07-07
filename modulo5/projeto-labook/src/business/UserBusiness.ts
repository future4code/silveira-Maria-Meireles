import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import UserDatabase from "../data/UserDatabase";
import { userInput } from "../types/userInput";
import { userRoles } from "../types/userRoles";
import UserModel from "../models/UserModel";
import { authenticationData } from "../types/authenticationData";
import Authenticator from "../services/Authenticator";
import IntermediateModel from "../models/IntermediateModel";

export default class UserBusiness {
    createUser = async(user: userInput, res: any) => {
       
            const {name, email, password, role} = user

            if(!name || !email || !password || !role) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("There's an empty field. Check your request before sending again.")
            }

            if(role.toLowerCase() !== userRoles.NORMAL && role.toLowerCase() !== userRoles.ADMIN) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("Invalid type of user role.")
            }

            if(email.includes("@") === false) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("Invalid type of email. Check if it has an @.")
            }

            if(password.length < 6) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("Password is too short. It needs to have more than 5 characters.")
            } 

            const userDatabase: UserDatabase = new UserDatabase()
            const verification = await userDatabase.verifyUserExistence(email)

            if(verification) {
                res.statusCode = 401;
                res.statusMessage = "Unauthorized"
                throw new Error("This user already exists.")
            }

            const idGenerator: IdGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()
            
            const hashManager: HashManager = new HashManager()
            const hashedPass = hashManager.createHash(password)

            const userModel = new UserModel(id, name, email, hashedPass, role)

            const authenticator: Authenticator = new Authenticator()
            const payload: authenticationData = {
                id: userModel.getUserId(),
                role: userModel.getUserRole()
            }

            const token: string = authenticator.generateToken(payload)

            await userDatabase.insertUser(userModel)
            
            return token;
    }

    signIn = async(loginData: {email: string, password: string}, res: any): Promise<string> => {

        const {email, password} = loginData
        
        if(!email || !password) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("There's an empty field. Check your request before sending again.")
        }

        if(email.includes("@") === false) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("The email is missing an @.")
        }

        const userDatabase: UserDatabase = new UserDatabase()
        const verification = await userDatabase.verifyUserExistence(email)

        const hashManager: HashManager = new HashManager()
        const verifiedPass = hashManager.compareHash(password, verification.password)

        if(!verification || !verifiedPass){
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("Invalid credentials.")
        }

        const payload: authenticationData = {
            id: verification.id,
            role: verification.role
        }

        const authenticator: Authenticator = new Authenticator()
        const token = authenticator.generateToken(payload)

        return token;
    }

    addNewFriend = async(data: {id: string, token: string}, res: any):Promise<void> => {
        const {id, token} = data
        console.log(token)

        if(!token) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need to sign in to add a new friend.")
        }

        if(!id) {
            res.statusMessage = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("You need to send the user's id to execute this action.")
        }

        const userDatabase = new UserDatabase()
        const verifiedUserExistance = await userDatabase.getUserById(id)

        if(!verifiedUserExistance) {
            res.statusCode = 404
            res.statusMessage = "Not Found"
            throw new Error("User Not found. Check the id.")
        }
        const authenticator = new Authenticator()
        const tokenData =  authenticator.getTokenData(token)
        
        if(!tokenData){
            res.statusCode = 404
            res.statusMessage = "Not Found"
            throw new Error("We couldn't find this token. Check if it's correct.")
        }

        const userId = tokenData.id

        const verifiedFriendship = await userDatabase.checkFriendshipExistence(userId, id)

        if(verifiedFriendship) {
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("You're already friends.")
        }
        const newFriend = new IntermediateModel(userId, verifiedUserExistance.id)

        await userDatabase.insertFriendship(newFriend)
    }
}