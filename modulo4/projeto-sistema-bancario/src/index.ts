import express, {Request, Response} from 'express';
import cors from 'cors';
import { Client, clientsList, bankStatement } from './data';

const app = express();
app.use(express.json());
app.use(cors());

const clientsSystem: Array<Client> = clientsList;

app.post("/clients", (req: Request, res: Response) => {
    let errorStatus: number = 400;
    try {
    const {name, cpf, dateOfBirth}: Client & {} = req.body;
    const [birthDay, birthMonth, birthYear]: string[] = dateOfBirth.split("/");
    const clientAge: number = 2022 - Number(birthYear)
    const cpfs = clientsSystem.filter((client) => client.cpf === cpf)

    if(clientAge < 18) {
        errorStatus = 422;
        throw new Error("The client doesn't have the minimum age to be registered.")
    }

    if(cpfs) {
        errorStatus = 422;
        throw new Error("This CPF has already been registered.")
    }

    const newClient: Client & {} = {
        name,
        cpf,
        dateOfBirth,
        balance: 0,
        transations: []
    };
    clientsSystem.push(newClient)
    res.status(201).send({message: "Client registered successfully!"})

    } catch(error: any) {
        res.status(errorStatus).send({message: error.message})
    }
})

app.get("/clients", (req: Request, res: Response) => {
    res.status(200).send({data: clientsSystem})
})

app.get("/clients/balance", (req: Request, res: Response) => {
    let errorStatus: number = 400;
    try {
    const clientName: string = req.query.name as string
    const clientCpf: number = Number(req.query.cpf) as number
    const clientData = clientsSystem.find((client) => client.name === clientName && client.cpf === clientCpf)

    if(!clientData) {
        errorStatus = 404;
        throw new Error("The client name or CPF were not found. Please check the fields.")
    }
    const clientMoney: number = clientData.balance;
    res.status(200).send({message: `You have ${clientMoney} in your account.`})

    } catch(error: any) {
        res.status(errorStatus).send({message: error.message})
    }
})

app.put("/clients/balance", (req: Request, res: Response) => {

})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})