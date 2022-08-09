import CompetitionDatabase from "../Data/CompetitionData";
import ResultDatabase from "../Data/ResultDatabase";
import { resultDTO } from "../DTOS/resultDTO";
import ResultModel from "../Models/ResultModel";
import IdGenerator from "../services/IdGenerator";


export default class ResultBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private resultDatabase: ResultDatabase,
        private competitionDatabase: CompetitionDatabase
    ){}

    createResult = async(resultInput: resultDTO): Promise<void> => {
        const {competition, athleteName, result, unity} = resultInput

        if(!competition || !athleteName || !result || !unity) {
            throw new Error("Todos os campos devem estar preenchidos para cadastrar um novo resultado.")
        }

        if(unity.toLowerCase() !== "s" && unity.toLowerCase() !== "m") {
            throw new Error("Unidade de medida inválida. São aceitas apenas m e s.")
        }

        const verifyAthletesCurrentScores = await this.resultDatabase.getAthleteByName(athleteName)

        if(verifyAthletesCurrentScores) {
            throw new Error("Este atleta já tem sua pontuação registrada na competição.")
        }

        if(!Number(result)){
            throw new Error("O registro de resultados aceita apenas números. Verifique os dados enviados.")
        }

        const verifyCompetitionStatus = await this.competitionDatabase.getCompetitionByName(competition)

        if(verifyCompetitionStatus.status.toLowerCase() === "concluida"){
            throw new Error("Não podem ser registradas novas pontuações. Essa competição está encerrada.")
        }

        const id: string = this.idGenerator.generateId()
        const newScore: ResultModel = new ResultModel(id, competition, athleteName, Number(result), unity) 

        await this.resultDatabase.insertResult(newScore)
    }

    getCompetitionRanking = async(name: string):Promise<any[]> => {
        if(!name) {
            throw new Error("Você precisa enviar o nome da competição para ter acesso ao ranking.")
        }

        const verifyCompetitionStatus = await this.competitionDatabase.getCompetitionByName(name)

        if(!verifyCompetitionStatus) {
            throw new Error("Não foi possível encontrar essa competição.")
        }

        let ranking = []
        if(verifyCompetitionStatus.status.toLowerCase() === "inconcluida") {
            ranking.push({message: "Essa competição ainda não foi finalizada, este é o seu ranking parcial:"})
        }

        const getRanking = await this.resultDatabase.getRanking(name)
        ranking.push(getRanking)
        
        return ranking
    }
}