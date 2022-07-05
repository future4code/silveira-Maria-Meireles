import { app } from "./app"
import { AddressInfo } from "net"
import UserController from "./UserController"

const userController: UserController = new UserController()

app.post("/user/signUp", userController.signUp)
app.post("/user/signIn", userController.signIn)
app.get("/user/all", userController.getAllUsers)
app.delete("/user/:id", userController.deleteUser)


const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})