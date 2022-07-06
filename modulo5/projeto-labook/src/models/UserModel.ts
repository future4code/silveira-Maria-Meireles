export default class UserModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: string 
    ){}

    public getUserId = (): string => {
        return this.id
    }

    public getUserName = (): string => {
        return this.name
    }

    public getUserEmail = (): string => {
        return this.email
    }

    public getUserPassword = ():string => {
        return this.password
    }

    public getUserRole = (): string => {
        return this.role
    }
}