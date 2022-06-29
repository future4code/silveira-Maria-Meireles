import * as bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

export default class HashManager {

    createHash = (plaintext: string):string => {

        const cost = Number(process.env.BCRYPT_COST);
        const salt: string = bcrypt.genSaltSync(cost)
        const cypherText: string = bcrypt.hashSync(plaintext, salt)

        return cypherText;
    }

    compareHash = (plaintext: string, cypherText: string): boolean => {
        return bcrypt.compareSync(plaintext, cypherText)
    } 
}