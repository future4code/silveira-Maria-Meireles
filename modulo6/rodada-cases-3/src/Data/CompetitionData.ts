import CompetitionModel from "../Models/CompetitionModel"
import BaseDatabase from "./BaseDatabase"

export default class CompetitionDatabase extends BaseDatabase{
    private tableName: string = "olympic_Competition"
    
    insertCompetition = async(competition: CompetitionModel): Promise<void> => {
        await this.getConnection()
        .insert({
            id: competition.getId(),
            competition_name: competition.getName(),
            type: competition.getType(),
            status: competition.getStatus()
        })
        .into(this.tableName)
    }

    getCompetitionByName = async(name: string): Promise<any> => {
        const [competitionResult] = await this.getConnection()
        .select("*")
        .from(this.tableName)
        .where({competition_name: name})

        return competitionResult
    }

    getCompetitionById = async(id: string): Promise<any> => {
        const [competitionResult] = await this.getConnection()
        .select("*")
        .from(this.tableName)
        .where({id: id})

        return competitionResult
    }

    changeCompetitionStatus = async(id: string): Promise<void> => {
        await this.getConnection().raw(`
        UPDATE ${this.tableName}
        SET status = "concluida"
        WHERE id = "${id}"
        `)
    }
}