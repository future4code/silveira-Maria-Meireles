import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/authenticationType'
import dotenv from 'dotenv'

dotenv.config()

export default class Authenticator{
    generateToken = (payload: authenticationData) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: "10h"
            }
        )
        return token;
    }

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token, process.env.JWT_KEY as string
        ) as any
        return tokenData;
    }
};
