import BaseDatabase from "../DataBase/BaseDatabase";
import RecipeModel from "../../models/RecipeModel";

const table: string = "cookenu_recipes"

export default class RecipeData extends BaseDatabase {
    createRecipe = async(recipe: RecipeModel): Promise<void> => {

        await this.getConnection()
        .insert({
            id: recipe.getRecipeId(),
            nome: recipe.getRecipeName(),
            descricao: recipe.getRecipeDescription(),
            data_de_criacao: recipe.getRecipeDate(),
            creators_id: recipe.getCreatorsId()
        })
        .into(table)
    }

    getRecipeById = async(id: string): Promise<any> => {

        const [recipe] = await this.getConnection()
        .select("*")
        .from(table)
        .where({id}) 
        
        return recipe;
    }

    deleteUserRecipe = async(recipe_id: string): Promise<void> => {
        await this.getConnection()
        .delete()
        .from(table)
        .where({id: recipe_id})
    }

    deleteRecipesCreator = async(creators_id: string): Promise<void> => {
        await this.getConnection()
        .delete()
        .from(table)
        .where({creators_id})
    }

    updateRecipe = async(id: string, nome: string, descricao: string):Promise<void> => {
        await this.getConnection()
        .update({
            nome,
            descricao
        })
        .from(table)
        .where({id})
    }
} 