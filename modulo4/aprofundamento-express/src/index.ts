import express, {Request, Response} from "express"
import cors from "cors"

const app = express();
app.use(express.json ());
app.use(cors ());

type Task = {
    userId: number | string,
    id: number | string,
    title: string,
    completed: string | boolean
};

const toDoList: Array<Task> = [
    {
        userId: 10,
        id: 6,
        title: "Fazer lanche",
        completed: false
    },
    {
        userId: 10,
        id: 7,
        title: "Comprar ração",
        completed: false
    },
    {
        userId: 10,
        id: 1,
        title: "Terminar exercícios",
        completed: false
    },
    {
        userId: 11,
        id: 2,
        title: "Ler",
        completed: false
    },
    {
        userId: 12,
        id: 3,
        title: "Sair para malhar",
        completed: true
    },
    {
        userId: 13,
        id: 4,
        title: "Montar cronograma",
        completed: false
    },
    {
        userId: 14,
        id: 5,
        title: "Revisar matérias",
        completed: true
    }
]

app.get("/ping", (request: Request, response: Response) => {
    response.status(201).send({message: "pong."})
})

app.get("/findTasks", (req: Request, res: Response) => {
    const usersInput = req.query.completed as string

    const filteredTasks = toDoList.filter((task) => {
        return task.completed.toString() === usersInput
    })
    res.status(201).send({filteredTasks})
})

app.post("/tasks/createTask",(req: Request, res: Response) => {
    const newTask: Task & {} = {
        userId: req.body.userId,
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed
    }
    toDoList.push(newTask)
    res.status(201).send({message: "Tarefa criada com sucesso! :)", data: toDoList})
})

app.put("/tasks/changeStatus/:id", (req: Request, res: Response) => {
    const taskId: number = +req.params.id;
    const newStatus: string = req.body.completed as string;

    const updatedTasks = toDoList.map((task) => {
        if (task.id !== taskId) {
            return task
        } else {
            return {...task, completed: newStatus}
        }
    })

    const updatedTask = updatedTasks.filter((task) => {
        return task.id === taskId
    })

    res.status(201).send({message: "Status alterado.", data: updatedTask})
})

app.delete("/tasks/deleteTask/:id" ,(req: Request, res: Response) => {
    const taskId: number = +req.params.id
    const updatedTasks = toDoList.filter((task) => {
        return task.id !== taskId
    })

    res.status(201).send({message: "Tarefa deletada!", data: updatedTasks})
})

app.get("/tasks/userTasks/:userId", (req: Request, res: Response) => {
    const userId: number = +req.params.userId
    const userTasks = toDoList.filter((tasks) => {
        if(tasks.userId === userId) {
            return tasks
        }
    })
    res.status(201).send({data: userTasks})
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})