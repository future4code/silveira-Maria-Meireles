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
    console.log(await getActorByName("JULIANA PAES"))
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

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.")
})