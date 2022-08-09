import CompetitionDatabase from "../Data/CompetitionData";
import { competitionDTO, COMPETITIONSTATUS, COMPETITIONTYPES } from "../DTOS/competitionDTO";
import CompetitionModel from "../Models/CompetitionModel";
import IdGenerator from "../services/IdGenerator";

export default class CompetitionBusiness {
    constructor(
        private IdGenerator: IdGenerator,
        private competitionDatabase: CompetitionDatabase
    ){}

    createCompetition = async(competition: competitionDTO): Promise<void> => {
        const {name, type, status} = competition

        if(!name || !type || !status) {
            throw new Error("Todos os campos são obrigatórios para o registro de uma nova competição.")
        }

        if(!Object.keys(COMPETITIONTYPES).includes(type.toUpperCase())) {
            throw new Error("Tipo de competição olímpica inválida. Os valores válidos são: cemmetros e dardos.")
        }

        if(!Object.keys(COMPETITIONSTATUS).includes(status.toUpperCase())) {
            throw new Error("Status de andamento da competiçao inválido. São aceitos concluida e inconcluida.")
        }

        const verifyCompetitionExistance = await this.competitionDatabase.getCompetitionByName(name)

        if(verifyCompetitionExistance) {
            throw new Error("Essa competição já foi cadastrada. Você pode registrar novas pontuações ou atualizar seu andamento.")
        }
        const id: string = this.IdGenerator.generateId()

        const newCompetition: CompetitionModel = new CompetitionModel(id, name, type, status)

        await this.competitionDatabase.insertCompetition(newCompetition)
    }
}