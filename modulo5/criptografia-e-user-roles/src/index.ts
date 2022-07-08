import { app } from "./app";
import { AddressInfo } from 'net'
import UserController from "./endpoints/UserController";

const userController: UserController = new UserController()

app.post("/user/signUp", userController.createNewUser)
app.post("/user/signIn", userController.signIn)


const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
            console.log(`Server is running on http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})