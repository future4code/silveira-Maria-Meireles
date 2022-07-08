import moment from "moment";
import PostDataBase from "../data/PostDataBase";
import LikeModel from "../models/LikesModel";
import PostModel from "../models/PostModel";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";
import { postInput } from "../types/postInput";
import { postType } from "../types/postType";
import { PostType } from "../types/postTypes";


export default class PostBusiness {
    createPost = async(postData: postInput, res: any, token: string): Promise<void> => {

        const {photo, description, type} = postData
        const creation_date: string = moment().format("YYYY/MM/DD")

        const authenticator: Authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(!token || !tokenData) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need a valid access token to execute this action.")
        }

        const creators_id: string = tokenData.id

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
            type,
            creators_id
        }

        const postDataBase: PostDataBase = new PostDataBase()
        const postVerification = postDataBase.verifyPostExistence(newPost)

        if(!postVerification){
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("This post alrady exists.")
        }
        
        const post = new PostModel(id, photo, creation_date, description, type, creators_id)
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
            type: verifiedPost.type,
            creators_id: verifiedPost.creators_id
        }

        return post
    }

    addLike = async(data: {id: string, token: string}, res: any): Promise<void> => {
        const {id, token} = data

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        const userId: string = tokenData.id

        if(!token || !tokenData) {
            res.statusCode = 401
            res.statusMessage = "Unauthorized"
            throw new Error("You need a valid access token to execute this action.")
        }

        if(!id) {
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("You can only like a post if you send it's id.")
        }
        const postDatabase = new PostDataBase()
        const verifiedLike = await postDatabase.verifyLikeExistance(userId, id)

        if(verifiedLike) {
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("You already liked this post.")
        }
        const like = new LikeModel(userId, id)
    
         await postDatabase.insertPostLike(like)
    }

    removeLike = async(data: {id: string, token: string}, res: any): Promise<void> => {
        const {id, token} = data

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)
        const userId: string = tokenData.id

        if(!token || !tokenData){
            res.statusCode = 401
            res.statusMessage = "Not Acceptable"
            throw new Error("You need a valid access token to execute this action.")
        }

        if(!id) {
            res.statusCode = 406
            res.statusMessage = "Not Acceptable"
            throw new Error("You need to send the post's id to like it.")
        }

        const postDataBase = new PostDataBase()
        const verifiedLike = await postDataBase.verifyLikeExistance(userId, id)

        if(!verifiedLike) {
            res.statusCode = 404
            res.statusMessage = "Not Found"
            throw new Error("You didn't liked this post.")
        }
        
        await postDataBase.removeLike(userId, id)
    }
}