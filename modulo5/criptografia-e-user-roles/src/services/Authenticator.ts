import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/authenticationData'
import dotenv from 'dotenv'

dotenv.config()

export default class Authenticator {
    generateToken = (payload: authenticationData): string => {

        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "20h"
            }
        )
        return token;
    }

    getTokenData = (token: string): string => {

        const data = jwt.verify(
            token, process.env.JWT_KEY as string
        ) as any
        return data;
    }
}