import { Request, Response } from 'express'
import IdGenerator from "../../sevices/idServices/IdGenerator";
import RecipeModel from "../../models/RecipeModel";
import RecipeData from "../../data/RecipeData/RecipeData";
import moment from 'moment'

export default class RecipeController{

    createNewRecipe = async(req: Request, res: Response):Promise<void> => {
        const {nome, descricao} = req.body

        try{
        const data_de_criacao = moment().format("YYYY/MM/DD")

            if(!nome || !descricao) {
                res.statusCode = 406;
                res.statusMessage = "Not Acceptable"
                throw new Error("There´s a field missing. You need to send all of them to create a recipe.")
            }

            const recipeData: RecipeData = new RecipeData()
            const idGenerator: IdGenerator = new IdGenerator()
            const recipesId = idGenerator.generateId()

            const recipe = new RecipeModel(recipesId, nome, descricao, data_de_criacao)
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
}