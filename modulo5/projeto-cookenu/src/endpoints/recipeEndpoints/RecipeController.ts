import { Request, Response } from 'express'
import IdGenerator from "../../sevices/idServices/IdGenerator";
import RecipeModel from "../../models/RecipeModel";
import RecipeData from "../../data/RecipeData/RecipeData";
import moment from 'moment'
import Authenticator from '../../sevices/tokenServices/Authenticator';
import { USER_ROLES } from '../../types/userType';

export default class RecipeController{

    createNewRecipe = async(req: Request, res: Response):Promise<void> => {
        const {nome, descricao} = req.body
        const token: string = req.headers.authorization as string

        try{
        const data_de_criacao = moment().format("YYYY/MM/DD")

            if(!nome || !descricao) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("There´s a field missing. You need to send all of them to create a recipe.")
            }

            if (!token) {
                res.statusCode = 401;
                res.statusMessage = "Unauthorized"
                throw new Error("You need to be signed to make this action.")
            }
            const recipeData: RecipeData = new RecipeData()
            const idGenerator: IdGenerator = new IdGenerator()
            const recipesId = idGenerator.generateId()

            const authenticator: Authenticator = new Authenticator()
            const tokenData = await authenticator.getTokenData(token)
            const creatorsId = tokenData.id

            const recipe = new RecipeModel(recipesId, nome, descricao, data_de_criacao, creatorsId)
            recipeData.createRecipe(recipe)

            res.status(201).send({message: "Recipe registered."})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    getRecipeById = async(req: Request, res: Response): Promise<void> => {

        const recipeId: string = req.params.id as string
        const token: string = req.headers.authorization as string

        try {
            if(!recipeId) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("You need to send the recipe's id.")
            }

            if(!token) {
                res.statusCode = 401;
                res.statusMessage = "Unauthorized"
                throw new Error("You need to send your access token to get a recipe.")
            }

            const recipeData: RecipeData = new RecipeData()
            const verifiedRecipe = await recipeData.getRecipeById(recipeId)
            const recipeDate = moment(verifiedRecipe.data_de_criacao).format("DD/MM/YYYY")

            if(!verifiedRecipe){
                res.statusCode = 404;
                res.statusMessage = "Not Found"
                throw new Error("We couldn't find this recipe.")
            }

            const recipe = {
                id: verifiedRecipe.id,
                nome: verifiedRecipe.nome,
                descricao: verifiedRecipe.descricao,
                data_de_criacao: recipeDate
            }

            res.status(200).send({data: {recipe: recipe}})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    editRecipeContent = async(req: Request, res: Response): Promise<void> => {
        const id: string = req.params.id as string;
        const token: string = req.headers.authorization as string;
        const {nome, descricao} = req.body

        try {
            if(!token) {
             res.statusCode = 401;
             res.statusMessage = "Unauthorized"
             throw new Error("You have to login first.")   
            }

            if(!id) {
                res.statusCode = 406;
                res.statusMessage = "Not Accepted"
                throw new Error("You need to send the recipe's id.")
            }

            if(!nome || !descricao){
                res.statusCode = 406;
                res.statusMessage = "Not Accepted"
                throw new Error("Any change was made.")
            }

            const authenticator: Authenticator = new Authenticator()
            const tokenData = authenticator.getTokenData(token)
            const userId = tokenData.id

            const recipeData = new RecipeData()
            const recipeResult = await recipeData.getRecipeById(id)

            if(!recipeResult) {
                res.statusCode = 404;
                res.statusMessage = "Not Found"
                throw new Error("Couldn't find this recipe")
            }

            if(recipeResult.creators_id !== userId) {
                res.statusCode = 403;
                res.statusMessage = "Forbbiden"
                throw new Error("You cannot update someone else's recipes.")
            }

            recipeData.updateRecipe(id, nome, descricao)
            res.status(200).send({message: "Recipe updated."})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    deleteUserRecipe = async(req: Request, res: Response): Promise<void> => {

        const token: string = req.headers.authorization as string;
        const recipeId : string = req.body.recipeId as string;

    try{
        if(!recipeId) {
            res.statusCode = 406;
            res.statusMessage = "Not Acceptable"
            throw new Error("You need so send the recipe's id to delete it.")
        }

        if(!token) {
            res.statusCode = 401;
            res.statusMessage = "Unauthorized"
            throw new Error("You need to be signed to continue.")
        }

        const authenticator: Authenticator =  new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userId = tokenData.id
        const typeOfUser = tokenData.role 
        
        const recipeData: RecipeData = new RecipeData()


        if(typeOfUser === USER_ROLES.NORMAL) {
            const recipe = await recipeData.getRecipeById(recipeId)

            if(!recipe) {
                res.statusCode = 404;
                res.statusMessage = "Not found"
                throw new Error("Something went wrong")
            }

            if(recipe.creators_id !== userId) {
                res.statusCode = 401;
                res.statusMessage = "Unauthorized"
                throw new Error("You cannot delete someone else's recipe.")
            }

            recipeData.deleteUserRecipe(recipeId)

            res.status(200).send({message: "Recipe deleted!"})
        }

        if(typeOfUser === USER_ROLES.ADMIN) {
            recipeData.deleteUserRecipe(recipeId)
            res.status(200).send({message: "Recipe deleted!"})
        }

        } catch(error: any) {
            res.send(error.message)
        }
    }
}