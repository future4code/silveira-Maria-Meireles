import User from "../../models/User";
import BaseDatabase from "../DataBase/BaseDatabase";

const table: string = "cookenu_users"

export default class UserData extends BaseDatabase{

    createNewUser = async (user: User): Promise<void> => {
        await this.getConnection()
        .insert({
            id: user.getUserId(),
            nome: user.getUserName(),
            email: user.getUserEmail(),
            password: user.getUserPassword()
        })
        .into(table)
    }

    verifyUserExistence = async(email: string): Promise<any> => {
        const [userVerified] = await this.getConnection()
        .select("*")
        .from(table)
        .where({email})

        return userVerified;
    }
}