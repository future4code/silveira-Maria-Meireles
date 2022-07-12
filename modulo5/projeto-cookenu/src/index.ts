import { app } from "./app";
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import UserController from "./endpoints/userEndpoints/UserController";
import RecipeController from "./endpoints/recipeEndpoints/RecipeController";


dotenv.config();
const userController: UserController = new UserController()
const recipeController: RecipeController = new RecipeController()

app.post("/user/signUp", userController.createNewUser)
app.post("/user/signIn", userController.userSignIn)
app.post("/user/follow", userController.followUser)
app.post("/user/unfollow", userController.unfollowUser)
app.get("/user/profile", userController.getUserByToken)
app.get("/user/:id", userController.getUserById)
app.get("/feed", userController.getFeed)
app.delete("/user/delete/:id", userController.deleteUserAccount)

app.post("/recipe", recipeController.createNewRecipe)
app.get("/recipe/:id", recipeController.getRecipeById)
app.put("/recipe/update/:id", recipeController.editRecipeContent)
app.delete("/recipe/delete", recipeController.deleteUserRecipe)

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address =  server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})