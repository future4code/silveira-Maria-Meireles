class NodeList {
    constructor(
        public value: any,
        public next: NodeList | null = null 
    ){}
}

export {NodeList}