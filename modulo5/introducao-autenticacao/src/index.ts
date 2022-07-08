import { app } from './app'
import Usercontroller from './endpoints/UserController';

const userController: Usercontroller = new Usercontroller()

app.post("/user/signUp", userController.createUser)
app.post("/user/signIn", userController.signIn)
app.get("/user/profile", userController.getUser)


