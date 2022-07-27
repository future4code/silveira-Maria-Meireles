import { NodeList } from './ListNode'

class LinkedList {
    constructor(
        public head: NodeList | null = null
    ){}

    public addToEndOfList = (element: any) => {
        let nodeToBeAdded = new NodeList(element)

        if(!this.head) {
            this.head = nodeToBeAdded
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = nodeToBeAdded
        }
    }

    public findElement = (value: any) => {
        let currentNode = this.head
        while(currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next
        }
        return currentNode || -1
    }
}

export {LinkedList}