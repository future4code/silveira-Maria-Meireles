import { USER_ROLES } from "../types/userType"

export default class User{
    private id: string
    private email: string 
    private password: string
    private role: USER_ROLES

    constructor(id: string, email: string, password: string, role: USER_ROLES) {
        this.id = id,
        this.email = email,
        this.password = password,
        this.role = role
    }

    getUserId = ():string => {
        return this.id
    }

    getUserEmail = (): string => {
        return this.email
    }

    getUserPassword = (): string => {
        return this.password
    }

    getUserRole = (): string => {
        return this.role
    }
}