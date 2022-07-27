class Queue {
   constructor(
    public items: any[] = [],
    public length: number = 0
   ){}

   public checkifItsEmpty = () => {
        if(this.length === 0) {
            console.log("Empty queue")
        } else {
            console.log("There's items in this queue")
        }
   }

   public addItem = (value: any) => {
    this.items[this.length++] = value
   } 

   public showQueue = () => {
    console.log(this.items)
   }

   public removeItem = () => {
    if (this.length === 0) {
        console.log("Empty queue")
    } else {
        const removedItem = this.items[0];
        for (let index = 0; index < this.items.length; index++) {
            this.items[index] = this.items[index+1];
        }
        this.length--;
        return removedItem;
    }
   }
}

export {Queue}