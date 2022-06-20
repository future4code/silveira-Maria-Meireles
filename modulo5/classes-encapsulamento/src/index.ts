import { app } from "./app";

/* 
    1)
    
    a) Os métodos construtores recebem parâmetros que virão da instância de uma classe,
    e os atribuirão aos atributos da classe.
    "new UserAccount("17469798790", "Maria Eduarda Pacheco", 20);" 
    Chamamos da maneira mostrada acima, passando todos os parâmetros que a função construtora recebe.

    b) Foi impressa apenas uma vez.

    c) Podemos criar um método getter

*/

class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(
        description: string,
        value: number,
        date: string
    ) {
        console.log("Chamou certin")
        this.description = description;
        this.value = value;
        this.date = date
    }
    public getDescription():void {
        console.log(this.description)
    }
    public getValue():void {
        console.log(this.value)
    }
    public getDate():void {
        console.log(this.date)
    }
  }
  
  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getName(): string{
        return this.name
    }
    public getAge(): number{
        return this.age
    }
    public getCpf(): string{
        return this.cpf
    }
    public getBalance():number{
        return this.balance
    }
    public getTransactions(): Transaction[] {
        return this.transactions
    }
    public setTransactions(transaction:Transaction):void{
        this.transactions.push(transaction)
    }
  
  }

  class Bank {
    private accounts: UserAccount[];

    constructor(account: UserAccount[]) {
        this.accounts = account
    }

    public getAccounts():UserAccount[]{
        return this.accounts
    }
  }
  const newUser: UserAccount = new UserAccount("17469798790", "Maria Eduarda Pacheco", 20);
  const payment: Transaction = new Transaction("Pagando a internet cortada", 300, "20/06/2022")


newUser.setTransactions(payment)
console.log(newUser)


app.listen(3003, () => {
    console.log("Servidor executando na porta 3003.")
})