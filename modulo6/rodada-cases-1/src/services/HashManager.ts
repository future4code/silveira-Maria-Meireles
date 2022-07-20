import dotenv from 'dotenv'
import * as bcrypt from 'bcrypt'

dotenv.config()

export default class HashManager {
    createHash = async (plainText: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_ROUNDS)
        const salt: string = await bcrypt.genSalt(rounds)
        const cypherText = await bcrypt.hash(plainText, salt)
        
        return cypherText;
    }

    compareHash =  (plainText: string, cypherText: string): boolean => {
        return  bcrypt.compareSync(plainText, cypherText)
    }
}