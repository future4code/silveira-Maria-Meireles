import UserModel from "../models/UserModel";
import { userType } from "../types/userType";
import BaseDatabase from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
    private table: string = "labook_users"

    insertUser = async(user: UserModel): Promise<void> => {
        await this.getConnection()
        .insert({
            id: user.getUserId(),
            name: user.getUserName(),
            email: user.getUserEmail(),
            password: user.getUserPassword(),
            role: user.getUserRole()
        })
        .into(this.table)
    }

    verifyUserExistence = async(email: string): Promise<userType> => {

        const [verificationResult] = await this.getConnection()
        .select("*")
        .from(this.table)
        .where({email})

        return verificationResult
    }
}