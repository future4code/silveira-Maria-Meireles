import SellerDatabase from "../Data/SellerDatabase";
import SellerModel from "../Models/SellerModel";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { authenticationData } from "../types/authenticationDataInterface";
import { loginModel } from "../types/loginDTO";
import { sellerInput } from "../types/sellerInterface";

export default class SellerBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private sellerDatabase: SellerDatabase
    ){}

    signUp = async(input: sellerInput): Promise<string> => {
        const {name, email, password} = input 

        if(!name || !email || !password) {
            throw new Error("There's an empty field. Check your request.")
        }

        if(email.includes("@") !== true || password.length < 6) {
           throw new Error( "Invalid email or password too short. Must be larger than 6.")

        }
        const id: string = this.idGenerator.createId() as string
        const hashedPass: string = await this.hashManager.createHash(password)

        const verifySellersExistance = await this.sellerDatabase.getSellerByEmail(email)

        if(verifySellersExistance) {
            throw new Error ("This seller is already registered. Can't register twice.")
        }

        const newSeller = new SellerModel(id, name, email, hashedPass)
        await this.sellerDatabase.insertSeller(newSeller)

        const payload: authenticationData = {
            id: newSeller.getSellersId()
        }

        const token = this.authenticator.generateToken(payload)

        return token;
    }

    signIn = async(login: loginModel):Promise<string> => {
        
            const {email, password} = login

            if(!email || !password) {
                throw new Error("One of the fields is empty, please check your request.")
            }

            if(email.includes("@") !== true) {
                throw new Error("Invalid email format.")
            }

            const sellerResult = await this.sellerDatabase.getSellerByEmail(email)
            const verifySellersPass = this.hashManager.compareHash(password, sellerResult.password)

            if(!sellerResult || verifySellersPass === false) {
                throw new Error("Invalid Credentials")
            }

            const payload: authenticationData = {
                id: sellerResult.id
            }

            const token: string = this.authenticator.generateToken(payload)
            return token;
    }
} 