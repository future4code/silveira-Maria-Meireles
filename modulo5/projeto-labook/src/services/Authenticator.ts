import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { authenticationData } from '../types/authenticationData'

dotenv.config()

export default class Authenticator {
    generateToken = (payload: authenticationData): string => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                "expiresIn": "10h"
            }
        )
        return token;
    }

    getTokenData = (token: string): authenticationData => {
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData
        return data;
    }
}