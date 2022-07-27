class Pile {
    constructor(
        public length: number = 0,
        public items: any[] = []
    ){}

    public printPile = () => {
        console.log(this.items)
    } 

    public checkIfItsEmpty = () => {
        if(this.length === 0) {
            console.log("Empty pile")
        } else {
            console.log("There's items in this pile.")
        }
    }

    public addItem = (item: any) => {
        this.items[this.length++] = item
    }

    public removeLastItem = () => {
        if(this.length === 0) {
            console.log("Cannot remove, empty pile.")
        } else {
            const removedItem = this.items[--this.length]
            this.items.length = this.length
            return removedItem
        }
    }
}

export {Pile}