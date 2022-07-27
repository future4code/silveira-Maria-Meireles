import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { LinkedList } from './ex1/LinkedList'
import { NodeList } from './ex1/ListNode'
import { Pile } from './ex2/Pilha'
import { Queue } from './ex3/Queue'

const app = express()
app.use(express.json())
app.use(cors())

// 1) 
const headElement: NodeList = new NodeList(17)
const list: LinkedList = new LinkedList(headElement)

list.addToEndOfList(87)
list.addToEndOfList(45)
list.addToEndOfList(9)
list.addToEndOfList(20)

console.log(list.findElement(45))
console.log(list.findElement(783))
console.log(list)


// 2)

const pile = new Pile()
pile.addItem("Maria")
pile.addItem("Eduarda")
pile.addItem("Cazuza")
pile.addItem("Barão Vermelho")
pile.addItem("pq tô ouvindo agora")
pile.addItem("Sorte e azar")

pile.checkIfItsEmpty()
pile.printPile()
console.log(pile.removeLastItem())
pile.printPile()
 

// 3)

const queue = new Queue();
queue.addItem("Gabriel, o pensador")
queue.addItem("teste")
queue.addItem("testeUm")

queue.checkifItsEmpty()
queue.showQueue()
console.log(queue.removeItem())

const server = app.listen( 3003 ,() => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})