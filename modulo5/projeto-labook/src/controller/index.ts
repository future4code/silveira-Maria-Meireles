import { app } from "./app";
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import UserController from "./UserController";
import PostController from "./PostController";

dotenv.config()

const userController = new UserController()
const postController = new PostController()

app.post("/user/signUp", userController.createUser)
app.post("/user/signIn", userController.signIn)
app.post("/user/addFriend/:id", userController.addFriendship)
app.post("/user/removeFriend/:id", userController.removeFriend)
app.get("/user/feed", userController.getUserFeed)

app.post("/post/create", postController.createPost)
app.get("/post/:id", postController.getPostById)

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})