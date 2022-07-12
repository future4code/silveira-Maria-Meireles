import * as bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

export default class HashManager{
    generateHash = (plaintext: string): string => {

        const cost = Number(process.env.BCRYPT_ROUNDS)
        const salt: string =  bcrypt.genSaltSync(cost)
        const cypherText = bcrypt.hashSync(plaintext, salt)
        console.log(cypherText)

        return cypherText;
    }

    compareHash = (plaintext: string, cypherText: string): boolean => {
        return bcrypt.compareSync(plaintext, cypherText)
    }
}