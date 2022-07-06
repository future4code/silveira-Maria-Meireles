import PostModel from "../models/PostModel";
import BaseDatabase from "./BaseDatabase";

export default class PostDataBase extends BaseDatabase{
    private table: string = "labook_posts"

    insertPost = async(post: PostModel):Promise<void> => {
        await this.getConnection()
        .insert({
            id: post.getPostId(),
            photo: post.getPostPhoto(),
            creationDate: post.getCreationDate(),
            description: post.getPostDescription(),
            type: post.getPostType()
        })
        .into(this.table)
    }
}