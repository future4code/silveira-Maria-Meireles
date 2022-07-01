export enum USER_ROLES {
    NORMAL = "normal",
    ADMIN = "admin"
}

export type userTemplate = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
}