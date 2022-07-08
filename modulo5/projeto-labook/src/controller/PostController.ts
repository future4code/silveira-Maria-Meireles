import { Request, Response } from 'express'
import PostBusiness from '../business/PostBusiness'
import { postInput } from '../types/postInput'

export default class PostController {
    createPost = async(req: Request, res: Response):Promise<void> => {

        const {photo, creation_date, description, type} = req.body

        const token: string = req.headers.authorization as string  

        try {
            const newPost: postInput = {
                photo,
                creation_date,
                description,
                type
            }
            
            const response: Response = res;
            const postBusiness: PostBusiness = new PostBusiness()
            await postBusiness.createPost(newPost, response, token)

            res.status(201).send({message: "Post created!"})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    getPostById = async(req: Request, res: Response): Promise<void> => {
        const id: string = req.params.id as string;
        const token: string = req.headers.authorization as string
        try {
            const response: Response = res

            const postBusiness: PostBusiness = new PostBusiness()
            const post = await postBusiness.getPostById(id, token, response)

            res.status(200).send({message: "Success!", data: {post}})
        }catch(error: any) {
            res.send(error.message)
        }
    }

    addLike = async(req: Request, res: Response): Promise<void> => {
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string

        try {
            const response: Response = res

            const data = {
                id,
                token
            }

            const postBusiness = new PostBusiness()
            await postBusiness.addLike(data, response)

            res.status(200).send({message: "Post liked!"})
        }catch(error: any) {
            res.send(error.message)
        }
    }

    removeLike = async(req: Request, res: Response):Promise<void> => {
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string

        try{
            const data = {
                id,
                token
            }
            const response: Response = res

            const postBusiness = new PostBusiness()
            await postBusiness.removeLike(data, response)

            res.status(200).send({message: "You desliked this post."})
        }catch (error: any){
            res.send(error.message)
        }
    }
}