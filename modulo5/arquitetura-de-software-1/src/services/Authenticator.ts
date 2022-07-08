import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/authenticationData'
import dotenv from 'dotenv'

dotenv.config()

export const generateToken = (
    payload: authenticationData
): string => {
    const token: string = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: "10h"
        }
    ) 
    return token;
}

export const getTokenData = (token: string): authenticationData => {
    const tokenData = jwt.verify(
        token,
        process.env.JWT_KEY as string
    ) as authenticationData
    
    return tokenData;
}