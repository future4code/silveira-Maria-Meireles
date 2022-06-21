/*
    1) 
    a) No caso da classe mostrada no exemplo, não seria possível, já que ela é uma classe privada,
        e não tem um método getter implementado.
    
    b) Ela foi impressa apenas uma vez.


    2)
    a) Apenas uma vez também.

    b) Contando com a anterior, ele foi impresso duas vezes.
    Isso acontece porque Customer é uma classe instãnciada de User, então ao passarmos as
    informações, a clase User também é invocada pelo método super(params).

    
    3)
    a) Ainda não seria possível, já que essa instância não criou um método getter também,
    e o password herda o Private da classe pai.

*/
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public introduceYourself(): string {
        return `Olá, sou o(a) ${this.name} bom dia!`
      }
  }

const person: User = new User("152466127", "eduardapmeireles@hotmail.com", "Maria Eduarda", "12345678910")
console.log(person.getName())
console.log(person.getEmail())
console.log(person.getId())


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const newCustumer: Customer = new Customer("hdohidaa", "Alice@labenu.com", "Alice", "24152683", "MasterCard")
  console.log(newCustumer.getName())
  console.log(newCustumer.getEmail())
  console.log(newCustumer.getId())
  console.log(newCustumer.getCreditCard())
  console.log(newCustumer.purchaseTotal)
  console.log(person.introduceYourself())
  console.log(newCustumer.introduceYourself())

  // EXERÍCIOS DE POLIMORFISMO:
  /*
    1)
    a) Consegui mostrar todas as propriedades.


    2)
    a) O erro gerado foi: "Não é possível criar uma subclasse de uma classe abstrata".
    Isso acontece porque classes abstratas servem apenas para alvar características em comum entre várias classes.

    b) Para criar uma instância dessa classe, teríamos que criar uma subclasse que se utiliza-se dos dados nela,
    e só então criar uma instãncia dessa subclasse.
    
    3)
    a - b) Ela foi definida assim, porqueo cep de um local seja ele uma casa, prédio, indústria, sempre será o mesmo.
    Logo, não há a necessidade de deixar esse dado público para quem faça a manutenção do sistema.
    As interfaces não permitem que seu atributos sejam encapsulados de outra maneira que não seja "public",
    por isso o uso da classe abstrata nessa caso, para permitir que o dado seja "private".


    4)
    a) Essa classe possui as propriedades name, registrationNumber e consumedEnergy,
    e o método calculateBill() porque elas vêm da
    interface Client, e todos os atributos nela devem ser fornecidos obrigatóriamente.
    cpf e getCpf() são próprios da classe ResientialClient, sendo necessária a escrita de getCpf()
    porque cpf é um atributo privado.
    E ela conta ainda com os atributos residentsQuantity e cep, que são informações vindas da classe pai.

    5)
    a - b) O formato de ambas as classes é exatamente o mesmo. A diferença é que esse classe é filha
    da classe Commercial, e por isso ela tem uma propriedade diferente: "floorsQuantity".
    A propriedade cpf também muda para cnpj, já que se trata de uma empresa.

    6)
    a) 

  */

interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
}

const client: Client = {
    name: "João",
    registrationNumber: 8288,
    consumedEnergy: 100,
    calculateBill: () => {
        return 2
    }
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())


abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
}

// const erroProposital: Place = new Place()

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
 
      cep: string
    ) {
      super(cep);
    }

    public getResidents():number {
        return this.residentsQuantity
    }
  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    public getFloors(): number{
        return this.floorsQuantity
    }
  }

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      
      cep: string
          ) {
          super(cep);
    }
    public getMachines(): number{
        return this.machinesQuantity
    }
  }

  const house: Residence = new Residence(1, "25252525252")
  const building: Commerce = new Commerce(5, "848484848484")
  const industry: Industry = new Industry(10, "87457292039")

  console.log(house.getCep())
  console.log(building.getCep())
  console.log(industry.getCep())
console.log(house.getResidents())
console.log(building.getFloors())
console.log(industry.getMachines())


class ResidentialClient extends Residence implements Client {

    constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string  
    ) {
        super(residentsQuantity, cep);
        this.cpf = cpf
    }

    public getCpf(): string {
        return this.cpf
    }
     
    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
        this.cnpj = cnpj
    }

    public getCnpj():string {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industrialRegister: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
        this.industrialRegister = industrialRegister
    }

    public getIndustrialRegister(): number{
        return this.industrialRegister
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + (100 * this.machinesQuantity)
    }
}
