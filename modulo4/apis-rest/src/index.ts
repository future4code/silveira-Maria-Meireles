/* Respostas dos exercícios discursivos: 
    1) 
    a) Utilizaria o verbo GET.
    b) Como se trata de um array de usuários, utilizar o nome "/users" deixaria bem objetivo.

    2)
    a) Por query params, já que eles geralmente são usados pra fazer esse tipo de filtragem.
    b) Fiz com um bloco if, comparando a string enviada com os valores contidos em "UserType".

    3)
    a) Novamente utilizei os Query Params.

    4)
    a) O endpoint continua funcionando. O comportamento do put é alterar completamente um objeto caso ele exista,
    ou criar um novo caso não.
    b) Apesar de ele fazer a transação corretamente, talvez não fosse considerado uma boa prática com base nas convenções criadas.
*/

import express, {Request, Response} from 'express'
import cors from 'cors'
import { users, User, UserType } from './data';

const app = express();
app.use(express.json());
app.use(cors());

app.get( "/users", (req: Request, res: Response) => {
    let errorStatus: number = 400;
    try {
        // const userType: string = req.query.type as string;
        const userName: string = req.query.name as string;

        // if(userType.toUpperCase() !== UserType.ADMIN && userType.toUpperCase() !== UserType.NORMAL) {
        //     errorStatus = 422;
        //     throw new Error("Invalid user type. Please, check your query params field.")
        // }
        // const filteredUsers = users.filter((user) => {
        //     if(user.type === userType.toUpperCase()) {
        //         return user
        //     }
        // })

        const user = users.find((user) => user.name.toLowerCase() === userName.toLowerCase())
        if(!user) {
            errorStatus = 404;
            throw new Error("User not found. Please, verify the user name.")
        }

        res.status(201).send({data: user})
    }
    catch(error: any) {
        res.status(errorStatus).send({message: error.message})
    }
})

app.post("/users", (req: Request, res: Response) => {
    let errorStatus: number = 400;
    try {
    const {id, name, email, type, age}: User & {} = req.body 
    if(!id || !name || !email || !type ||!age) {
        errorStatus = 422;
        throw new Error("Missing parameter. Please check the body fields")
    }
    if(type.toUpperCase() !== UserType.ADMIN && type.toUpperCase() !== UserType.NORMAL) {
        errorStatus = 422;
        throw new Error("Invalid type. Please check the 'type' field.")
    }
    res.status(201).send({message: "user created"})
    } catch (error: any) {
        res.status(errorStatus).send({message: error.message})
    }
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})