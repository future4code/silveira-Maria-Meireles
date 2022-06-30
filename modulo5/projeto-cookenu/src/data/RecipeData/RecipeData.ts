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
            data_de_criacao: recipe.getRecipeDate()
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
} 