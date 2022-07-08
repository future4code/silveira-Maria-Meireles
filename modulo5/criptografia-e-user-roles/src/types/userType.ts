export enum USER_ROLES {
    NORMAL = "normal",
    ADMIN = "admin"
}


export type user = {
    id: string,
    email: string,
    password: string,
    role: USER_ROLES
}