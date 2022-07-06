import PostModel from "../models/PostModel";
import { postType } from "../types/postType";
import BaseDatabase from "./BaseDatabase";

export default class PostDataBase extends BaseDatabase{
    private table: string = "labook_posts"

    insertPost = async(post: PostModel):Promise<void> => {
        await this.getConnection()
        .insert({
            id: post.getPostId(),
            photo: post.getPostPhoto(),
            creation_date: post.getCreationDate(),
            description: post.getPostDescription(),
            type: post.getPostType()
        })
        .into(this.table)
    }

    verifyPostExistence = async(post: postType): Promise<postType> => {
        const [postResult] = await this.getConnection()
        .select("*")
        .from(this.table)
        .where({
            id: post.id, 
            photo: post.photo, 
            creation_date: post.creation_date, 
            description: post.description, type: 
            post.type
        })
        return postResult;
    } 

    getPostById = async(id: string): Promise<postType> => {
        const [postResult] = await this.getConnection()
        .select("*")
        .from(this.table)
        .where({id})

        return postResult
    }
}