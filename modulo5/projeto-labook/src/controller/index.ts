import { app } from "./app";
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import UserController from "./UserController";

dotenv.config()

const userController = new UserController()

app.post("/user/signUp", userController.createUser)
app.post("/user/signIn", userController.signIn)

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})