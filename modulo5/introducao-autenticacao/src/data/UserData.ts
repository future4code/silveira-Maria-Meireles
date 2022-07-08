import User from "../models/User";
import BaseDatabase from "./BaseDatabase";

const table: string = "usuarios"

export default class UserData extends BaseDatabase{

    async insertUser(user: User): Promise<void> {

        await this.getConnection()
        .insert({
            id: user.getUserId(),
            email: user.getUserEmail(),
            password: user.getPassword()
        })
        .into(table)
    }

    async verifyUserExistance(email: string): Promise<any> {

       const [userVerified] =  await this.getConnection()
       .select("*")
        .from(table).where({email: email})

        return userVerified
    }

    async getUserById(id: string): Promise<any> {
        const result = await this.getConnection()
        .select("*")
        .from(table).where({id: id})

        return result[0];
    }
}