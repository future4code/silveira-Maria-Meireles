export default class RecipeModel{
    private id: string;
    private nome: string;
    private descricao: string;
    private data_de_criacao: string

    constructor(
         id: string,
         nome: string,
         descricao: string,
         data_de_criacao: string
    ){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.data_de_criacao = data_de_criacao
    }

    getRecipeId = (): string => {
        return this.id
    }

    getRecipeName = (): string => {
        return this.nome
    }

    getRecipeDescription = (): string => {
        return this.descricao
    }

    getRecipeDate = (): string => {
        return this.data_de_criacao
    }
}