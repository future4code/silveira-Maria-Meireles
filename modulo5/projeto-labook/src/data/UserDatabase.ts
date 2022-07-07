import IntermediateModel from "../models/IntermediateModel";
import UserModel from "../models/UserModel";
import { intermediateType } from "../types/intermediateType";
import { userType } from "../types/userType";
import BaseDatabase from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
    private table: string = "labook_users";
    private intermediateTable: string = "intermediate_friends"

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

    getUserById = async(id: string): Promise<userType> => {
        const [verificationResult] = await this.getConnection()
        .select("*")
        .from(this.table)
        .where({id})

        return verificationResult;
    }

    insertFriendship = async (ids: IntermediateModel):Promise<void> => {
        await this.getConnection()
        .insert({
            user_id: ids.getUserId(),
            friends_id: ids.getFriendsId()
        })
        .into(this.intermediateTable)
    }

    checkFriendshipExistence = async(user_id: string, friends_id: string):Promise<intermediateType> => {
        const [existanceVerified] = await this.getConnection()
        .select("*")
        .from(this.intermediateTable)
        .where({user_id, friends_id})

        return existanceVerified;
    }
}