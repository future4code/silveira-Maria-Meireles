import dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/authenticationDataInterface'

dotenv.config()

export default class Authenticator {
    private expiresIn: string = "12h"

    generateToken = (payload: authenticationData): string => {
        const token: string = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: this.expiresIn
            }
            )
        return token;
    }

    getTokenData = (token: string): authenticationData => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string
        ) as authenticationData

        return tokenData;
    }
}