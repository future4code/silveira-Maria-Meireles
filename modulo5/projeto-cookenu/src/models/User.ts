export default class User{
    constructor(
        private id: string, 
        private nome:string,
        private email: string,
        private password: string
        ){}

        public getUserId = (): string => {
            return this.id
        }

        public getUserName = (): string => {
            return this.nome
        }

        public getUserEmail = ():string => {
            return this.email
        }

        public getUserPassword = ():string => {
            return this.password
        }
}