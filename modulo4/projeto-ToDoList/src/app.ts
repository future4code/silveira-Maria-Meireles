import express, {Request, Response} from 'express';
import cors from 'cors';
import { connection } from './connection';
import knex from 'knex';

const app = express();
app.use(express.json());
app.use(cors());

type User = {
    name: string,
    nickname: string,
    email: string
}

type Task = {
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string
}

const updateUser = async (name: string, nickname: string, id:string):Promise<any> => {
    await connection("Users")
    .update({
        name: name,
        nickname: nickname
    }).where("id", id)
}

app.post("/user", async (req: Request, res: Response) => {
    const {name, nickname, email}: {} & User = req.body
    try{
        if(!name || !nickname || !email) {
            throw new Error("Um dos campos ainda precisa ser preenchido, por favor, verifique os dados.")
        }
        await connection("Users")
        .insert({
           id: Date.now(),
           name,
           nickname,
           email
       })
       res.status(201).send("Usuário criado!")
      
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    const userId: string = req.params.id as string;
    try {
        const userAccount = await connection("Users")
        .select("*").where({id: userId});
        if(!userAccount) {
            throw new Error("Usuário não encontrado no banco de dados")
        }
        res.status(200).send({data: userAccount})
    } catch(error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    const userId: string = req.params.id as string
    const {name, nickname} = req.body 
    try {
        if (!name || !nickname) {
            throw new Error("Todos os campos precisam estar preenchidos.")
        }
        await updateUser(name, nickname, userId)
    res.status(201).send({message: "Usuário alterado!"})
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post("/task", async (req: Request, res: Response) => {
    const {title, description, limitDate, creatorUserId}: Task & {} = req.body

    try {
        if(!title || !description || !limitDate || !creatorUserId) {
            throw new Error("Todos os campos devem ser preenchidos.")
        }
        const [day, month, year] = limitDate.split("/")
        const correctDate: string = `${year}/${month}/${day}`
        await connection("Tasks")
        .insert({
            id: Date.now(),
            title,
            description,
            limit_date: correctDate,
            creator_user: creatorUserId
        })
        res.status(201).send({message: "Tarefa criada!"})
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    const taskId: string = req.params.id as string;
    try {
        const task = await connection("Tasks")
        .join("Users", "Users.id", "=", "creator_user").select("Tasks.*", "Users.nickname").where({"Tasks.id": taskId})
        if(!task) {
            throw new Error("Tarefa não encontrada.")
        }
        res.status(200).send({data: task})
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})
