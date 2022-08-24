import express from 'express'
import IdGenerator from '../services/IdGenerator'
import CompetitionController from '../Controller/CompetitionController'
import CompetitionBusiness from '../Business/CompetitionBusiness'
import CompetitionDatabase from '../Data/CompetitionData'

const competitionBusiness = new CompetitionBusiness(
    new IdGenerator(),
    new CompetitionDatabase()
)

const competitionController = new CompetitionController(
    competitionBusiness
)

export const competitionRouter = express.Router()

competitionRouter.post("/register", competitionController.createCompetition)
competitionRouter.put("/end", competitionController.endCompetition)