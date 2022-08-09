import CompetitionBusiness from "../Business/CompetitionBusiness";
import {Request, Response} from 'express'
import { competitionDTO } from "../DTOS/competitionDTO";

export default class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ){}

    createCompetition = async(req: Request, res: Response): Promise<void> => {
        const {name, type, status} = req.body
        try {
            const competitionInput: competitionDTO = {
                name,
                type,
                status
            }

            await this.competitionBusiness.createCompetition(competitionInput)
            res.status(201).send({message: "Competição registrada com sucesso!"})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}