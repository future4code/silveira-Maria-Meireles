import IntermediateModel from "../../models/IntermediateModel";
import User from "../../models/User";
import BaseDatabase from "../DataBase/BaseDatabase";

const table: string = "cookenu_users"
const intermediateTable: string = "following_users"
const recipesTable: string = "cookenu_recipes"

export default class UserData extends BaseDatabase{

    createNewUser = async (user: User): Promise<void> => {
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

    verifyUserExistence = async(email: string): Promise<any> => {
        const [userVerified] = await this.getConnection()
        .select("*")
        .from(table)
        .where({email})

        return userVerified;
    }

    getUserById = async(id: string): Promise<any> => {
        const [user] = await this.getConnection()
        .select("*")
        .from(table)
        .where({id})

        return user;
    }

    followUser = async(intermediate: IntermediateModel): Promise<void> => {
        await this.getConnection()
        .insert({
            follower_id: intermediate.getUserId(),
            followed_id: intermediate.getFollowed_id()
        })
        .into(intermediateTable)
    }

    getIntermediateData = async(follower_id: string, followed_id: string): Promise<any> => {
        const [userId] = await this.getConnection()
        .select("*")
        .from(intermediateTable)
        .where({follower_id, followed_id})

        return userId
    }

    unfollowUser = async(follower_user: string, followed_user: string): Promise<void> => {
        await this.getConnection()
        .delete()
        .from(intermediateTable)
        .where({follower_user, followed_user})
    }

    getFeed = async(follower_id: string): Promise<any> => {

        const feed =  await this.getConnection()
        .select(
            "cookenu_users.nome as name", 
            "cookenu_users.id", 
            "cookenu_recipes.nome", 
            "cookenu_recipes.descricao", 
            "cookenu_recipes.data_de_criacao", 
            "cookenu_recipes.creators_id"
            )
            .from(intermediateTable)
            .join(table, "cookenu_users.id", "following_users.followed_id")
            .join(recipesTable, "cookenu_recipes.creators_id", "following_users.followed_id")
            .where({ follower_id: follower_id})

            return feed;
    }

    deleteUserAccount = async (id:string):Promise<void> => {
        await this.getConnection()
        .delete()
        .from(table)
        .where({id})
    }

    deleteIntermediateConnection =async(user_id: string): Promise<void> => {
        await this.getConnection()
        .delete()
        .from(intermediateTable)
        .where({follower_id: user_id})
        .orWhere({followed_id: user_id})
    }
}