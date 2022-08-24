export enum COMPETITIONTYPES {
    CEMMETROS,
    DARDOS
}

export enum COMPETITIONSTATUS {
    CONCLUIDA,
    INCONCLUIDA
}

export interface competitionDTO {
    name: string
    type: string,
    status: string
}