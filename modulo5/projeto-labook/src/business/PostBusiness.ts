import moment from "moment";
import PostDataBase from "../data/PostDataBase";
import PostModel from "../models/PostModel";
import IdGenerator from "../services/IdGenerator";
import { postInput } from "../types/postInput";
import { postType } from "../types/postType";
import { PostType } from "../types/postTypes";


export default class PostBusiness {
    createPost = async(postData: postInput, res: any, token: string): Promise<void> => {

        const {photo, description, type} = postData
        const creation_date: string = moment().format("YYYY/MM/DD")

        if(!token) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need an access token to execute this action.")
        }

        if(!photo || !description || !type) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("One of the fields is missing, check your request before sending again.")
        }

        if(type.toLowerCase() !== PostType.NORMAL && type.toLowerCase() !== PostType.EVENTO){
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("Invalid type of post. The type must be normal or evento.")
        }

        const idGenerator: IdGenerator = new IdGenerator()
        const id: string = idGenerator.generateId()

        const newPost: postType = {
            id, 
            photo,
            creation_date,
            description,
            type
        }

        const postDataBase: PostDataBase = new PostDataBase()
        const postVerification = postDataBase.verifyPostExistence(newPost)

        if(!postVerification){
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("This post alrady exists.")
        }
        
        const post = new PostModel(id, photo, creation_date, description, type)
        await postDataBase.insertPost(post)
    }

    getPostById = async(id: string, token: string, res:any): Promise<postType> => {

        if(!id) {
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("You need to send the post's id to execute this action.")
        }

        if(!token) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need an access token to execute this action.")
        }

        const postDataBase: PostDataBase = new PostDataBase()
        const verifiedPost = await postDataBase.getPostById(id)
        
        if(!verifiedPost) {
            res.statusCode = 404;
            res.statusMessage = "Not Found"
            throw new Error("Post not found.")
        }

        const post: postType = {
            id: verifiedPost.id,
            photo: verifiedPost.photo,
            creation_date: verifiedPost.creation_date,
            description: verifiedPost.description,
            type: verifiedPost.type
        }

        return post
    }
}