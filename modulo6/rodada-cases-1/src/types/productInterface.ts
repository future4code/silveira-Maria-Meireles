export enum PRODUCTS_TYPES {
    SHIRT = "blusa",
    PANTS = "calça",
    ACESSORY = "acessório",
    SHOES = "sapato",
    COAT = "casaco",
    PERFUME = "perfumaria",
    DRESS = "vestido",
    SHORT = "short", 
    SKIRT = "saia"
}

export enum PRODUCTS_GENDER {
    FEMALE = "feminino",
    MALE = "masculino"
}

export interface productInput {
    photo: string
    name: string
    description?: string
    price: number
    type: PRODUCTS_TYPES
    gender: PRODUCTS_GENDER
}