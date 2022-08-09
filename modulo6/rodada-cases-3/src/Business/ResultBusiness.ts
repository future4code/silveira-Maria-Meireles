import ResultDatabase from "../Data/ResultDatabase";
import { resultDTO } from "../DTOS/resultDTO";
import IdGenerator from "../services/IdGenerator";


export default class ResultBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private resultDatabase: ResultDatabase
    ){}

    createResult = async(resultInput: resultDTO): Promise<void> => {
        const {competition, athleteName, result, unity} = resultInput

        if(!competition || !athleteName || !result || !unity) {
            throw new Error("Todos os campos devem estar preenchidos para cadastrar um novo resultado.")
        }

        
    }
}