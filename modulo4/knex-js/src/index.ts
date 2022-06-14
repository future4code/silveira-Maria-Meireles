import express, {Request, Response} from 'express';
import cors from 'cors';
import { connection } from './connection';
import { SortedReadonlyArray } from 'typescript';

/*
 1 - a)
        A resposta retornada com o método "raw" nos devolve dois arrays:
        Um deles com os dados da nossa tabela, e outro com alguns metadados do próprio banco.
        Como esse segundo array não tem utilidade para os usuários do front, ao enviarmos a resposta para eles,
        devemos fazer da seguinte maneira: results[0]
*/

const app = express();
app.use(express.json());
app.use(cors());

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM actor WHERE name = "${name}"
    `);
    return result[0];
};
const countActorsByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM actor GROUP BY "${gender}"
    `);
    return result[0];
}

const updateActorsSalary = async (salary: number, id: string): Promise<any> => {
    await connection("actor")
    .update({
        salary: salary
    }).where("id", id)
}

const removeActorById = async (id: string): Promise<any> => {
    await connection("actor").where("id", id).delete()
}

const setMediaByGender = async (gender: string): Promise<any> => {
    const result = await connection("actor")
    .avg("salary").where({gender})

    return result[0];
}

(async() => {
    console.log(await getActorByName("Fernanda Montenegro"))
})();

(async() => {
    console.log(await countActorsByGender("male"))
})();

(async() => {
    await updateActorsSalary(800000000, '005')
})();

(async() => {
    await removeActorById('005')
})();

(async() => {
    console.log(await setMediaByGender("male"))
})();

app.get("/actor", async (req: Request, res: Response) => {
    const gender: string = req.query.gender as string;
    try {
        const countActorsByGender = await connection("actor")
        .count("*").groupBy("gender").where("gender", gender)
        res.status(200).send({message:  countActorsByGender})
    } catch(error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
});

app.put("/actor/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id as string
    const salary: number = Number(req.body.salary) as number
    try {
        await updateActorsSalary(salary, id);

        res.status(200).send({message: 'Salário alterado!'})
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.delete("/actor/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id as string
    try {
        await removeActorById(id)
        res.status(200).send({message: "Ator deletado com sucesso!"})
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/actor/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id as string;

    try {
        const actor = await connection("actor")
        .select("*").where("id", id)
        res.status(200).send({message: actor})
    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})