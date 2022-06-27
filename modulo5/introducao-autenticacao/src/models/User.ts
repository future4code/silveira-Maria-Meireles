export default class User {
    protected id: string;
    protected email: string;
    protected password: string

    constructor(id: string, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password
    }

    getUserId (): string{
        return this.id
    }

    getUserEmail(): string {
        return this.email
    }

    getPassword(): string {
        return this.password
    }
}