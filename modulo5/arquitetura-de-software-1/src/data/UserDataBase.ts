import User from "../models/UserModel";
import BaseDatabase from "./BaseDatabase";
import { user } from "../types/userType";

const table: string = "taskList_user"

export default class UserDataBase extends BaseDatabase{

    insertUser = async(user: User) => {
        await this.getConnection()
        .insert({
            id: user.getUserId(),
            nome: user.getUserName(),
            email: user.getUserEmail(),
            password: user.getUserPassword(),
            role: user.getUserRole()
        })
        .into(table)
    }

    verifyUserExistence = async(email: string): Promise<user> => {
        const [userResult] = await this.getConnection()
        .select("*")
        .from(table)
        .where({email})

        return userResult
    }

    getUserById = async(id: string): Promise<user> => {
        const [userResult] = await this.getConnection()
        .select("*")
        .from(table)
        .where({id})

        return userResult 
    }

    getAllUsers = async(): Promise<user[]> => {
        const usersList = await this.getConnection()
        .select("id", "nome", "email", "role")
        .from(table)

        return usersList
    }

    deleteUser = async(id: string): Promise<void> => {
        await this.getConnection()
        .delete()
        .from(table)
        .where({id})
    }
}