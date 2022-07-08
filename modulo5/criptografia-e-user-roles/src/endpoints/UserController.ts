import { Request, Response } from 'express'
import BaseDatabase from '../data/BaseDatabase'
import User from '../models/User'
import UserData from '../data/UserData'
import IdGenerator from '../services/IdGenerator'
import Authenticator from '../services/Authenticator'
import { authenticationData } from '../types/authenticationData'
import HashManager from '../services/HashManager'
import { USER_ROLES } from '../types/userType'


export default class UserController {
    
    createNewUser = async(req: Request, res: Response): Promise<void> => {
        try{
            const {email, password, role} = req.body

            if(!password || password.length < 6) {
                res.statusCode = 422;
                res.statusMessage = "Valores inválidos"
                throw new Error("Verifique se você preencheu o campo de senha ou se ela possui 6 caracteres ou mais.")
            }

            if(!email || email.includes("@") === false) {
                res.statusCode = 422;
                res.statusMessage = "Valores inválidos"
                throw new Error("O campo de email não foi preenchido ou está com um formato incorreto.")

            }

            if(!role || (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL)) {
                res.statusCode = 403;
                res.statusMessage = "Credencial de acesso inválida"
                throw new Error("Verifique se você enviou o seu tipo de acesso, e se ele está com o valor correto.")
            }

            const userData = new UserData()
            const userVerified = await userData.verifyUserExistance(email)

            if(userVerified){
                res.statusCode = 401;
                res.statusMessage = "Não autorizado"
                throw new Error("Esse email não pode ser cadastrado no nosso sistema.")
            }
            
            const idGenerator: IdGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()

            const hashManager: HashManager = new HashManager()
            const passwordHash: string = hashManager.createHash(password)

            const user: User = new User(id, email, passwordHash, role)

            await userData.createNewUser(user)

            const payload: authenticationData = {
                id: user.getUserId(),
                role: role
            }

            const authenticator: Authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({message: "Usuário criado com sucesso!", data: token})

        } catch(error: any) {
            res.send(error.message)
        }
    }

    signIn = async(req: Request, res: Response): Promise<any> => {
        try {
            const {email, password, role} = req.body;

            if(!email || email.includes("@") === false) {
                res.statusCode = 422;
                res.statusMessage = "Valores inválidos"
                throw new Error("Campo de email vazio ou com um formato incorreto.")
            }
            if(!password) {
                res.statusCode = 422;
                res.statusMessage = "Valores inválidos"
                throw new Error("Preencha o campo de senha.")
            }

            if(!role || (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL)) {
                res.statusCode = 403;
                res.statusMessage = "Credencial de acesso inválida"
                throw new Error("Verifique se você enviou o seu tipo de acesso, e se ele está com o valor correto.")
            }

            const userData: UserData = new UserData()
            const userVerification = await userData.verifyUserExistance(email)

            const hashManager: HashManager = new HashManager()
            const verifiedPassword = hashManager.compareHash(
                password,
                userVerification.password
            )

            if(!userVerification || !verifiedPassword) {
                res.statusCode = 404;
                res.statusMessage = "Usuário inexistente"
                throw new Error("Credenciais de acesso inválidas.")
            }

            const payload: authenticationData = {
                id: userVerification.id,
                role: role
            }
            const token = new Authenticator().generateToken(payload)

            res.status(200).send({message: "Welcome!", token: token})
        } catch(error: any) {
            res.send(error.message)
        }
    }
}