import * as bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

export const hashCreator = async(plaintext: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt: string = await bcrypt.genSalt(rounds)
    const cypherText: string = await bcrypt.hash(plaintext, salt)
    return cypherText;
}

export const hashComparator = async(plaintext: string, cypherText: string): Promise<boolean> => {
    return bcrypt.compare(plaintext, cypherText)
}