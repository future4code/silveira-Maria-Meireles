import User from "../models/User";
import BaseDatabase from "./BaseDatabase";


const table: string = "usuarios"

export default class UserData extends BaseDatabase {

    createNewUser = async(user: User) => {
        await this.getConnection()
        .insert({
            id: user.getUserId(),
            email: user.getUserEmail(),
            password: user.getUserPassword()
        })
        .into(table)
    }

    verifyUserExistance = async(email: string): Promise<any> => {
        const [verification] = await this.getConnection()
        .select("*")
        .from(table)
        .where({email})

        return verification 
    }
}