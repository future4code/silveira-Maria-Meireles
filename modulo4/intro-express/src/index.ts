import express, {Request, Response} from 'express'
import cors from 'cors'
import { request } from 'http';
import { userInfo } from 'os';

const app = express();
app.use(cors());
app.use(express.json());

type User = {
    id: number | string,
    name: string,
    phone: string,
    email: string,
    website: string
}

type Post = {
    id: number | string,
    title: string,
    body: string,
    userId: number | string
}

const listaDeUsuarios: Array<User> = [
    {
        id: 101,
        name: "Maria Eduarda",
        phone: "(22)2222-2222",
        email: "eduardaPacheco@hotmail.com",
        website: "dudaPacheco"
    },
    {
        id: 102,
        name: "Marta",
        phone: "(11)1111-1111",
        email: "martaAmaral@hotmail.com",
        website: "martinhaAmaral"
    },
    {
        id: 103,
        name: "Camila",
        phone: "(33)3333-3333",
        email: "camila@hotmail.com",
        website: "camilaMoreira"
    },
    {
        id: 104,
        name: "Mariana",
        phone: "(44)4444-4444",
        email: "mario@hotmail.com",
        website: "mariSouza"
    },
    {
        id: 105,
        name: "Paulo",
        phone: "(55)5555-5555",
        email: "pauloo@hotmail.com",
        website: "pauloSilva"
    }
]

const listaDePosts: Array<Post> = [
    {
        id: 1,
        title: "post 1",
        body: "cccccccccc",
        userId: 101
    },
    {
        id: 2,
        title: "post 2",
        body: "ddddddddddd",
        userId: 102
    },
    {
        id: 3,
        title: "post 3",
        body: "bbbbbbbbbb",
        userId: 103
    },
    {
        id: 4,
        title: "post 4",
        body: "aaaaaaaaaaaa",
        userId: 104
    },
    {
        id: 5,
        title: "post 5",
        body: "criatividade fugiu correndo",
        userId: 105
    }
]

app.get("/teste", (request: Request, response: Response) => {
    response.status(201).send({message: "Seu teste funcionou!"})
})

app.get("/users", (request: Request, response:Response) => {
    response.status(201).send(listaDeUsuarios)
})

app.get("/posts", (request: Request, response: Response) => {
    response.status(201).send(listaDePosts)
})

app.get("/posts/:userId", (request: Request, response: Response) => {
    const id: number = Number(request.params.userId)
    const postDoUsuario = listaDePosts.filter((post) => {
        return post.userId === id
    })
    response.status(201).send(postDoUsuario)
})

app.delete("/users/:userId", (request: Request, response: Response) => {
    const id: number = Number(request.params.userId)
    const usuariosAtualizados = listaDeUsuarios.filter((usuario) => {
        return usuario.id !== id
    })
    response.status(201).send(usuariosAtualizados)
})

app.delete("/posts/:postId", (request: Request, response: Response) => {
    const id: number = Number(request.params.postId)
    const postsAtualizados = listaDePosts.filter((post) => {
        return post.id !== id
    })
    response.status(201).send(postsAtualizados)
})

app.listen(3003, () => {
    console.log("O servidor está rodando na porta http://localhost:3003.")
})