import LikeModel from "../models/LikesModel";
import PostModel from "../models/PostModel";
import { like } from "../types/likeType";
import { postType } from "../types/postType";
import BaseDatabase from "./BaseDatabase";

export default class PostDataBase extends BaseDatabase{
    private table: string = "labook_posts";
    private intermediateTable: string = "intermediate_likes"

    insertPost = async(post: PostModel):Promise<void> => {
        await this.getConnection()
        .insert({
            id: post.getPostId(),
            photo: post.getPostPhoto(),
            creation_date: post.getCreationDate(),
            description: post.getPostDescription(),
            type: post.getPostType(),
            creators_id: post.getCreatorsId()
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

    insertPostLike = async(ids: LikeModel):Promise<void> => {
        await this.getConnection()
        .insert({
            user_id: ids.getUserId(),
            posts_id: ids.getPostsId()
        })
        .into(this.intermediateTable)
    }

    verifyLikeExistance = async(user_id: string, posts_id: string):Promise<like> => {
        const [verificationResult] = await this.getConnection()
        .select("*")
        .from(this.intermediateTable)
        .where({user_id, posts_id})

        return verificationResult;
    }

    removeLike = async(user_id: string, posts_id: string): Promise<void> => {
        await this.getConnection()
        .delete()
        .from(this.intermediateTable)
        .where({user_id, posts_id})
    }
}