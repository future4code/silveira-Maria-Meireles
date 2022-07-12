export default class IntermediateModel{
    constructor(
        private user_id: string, 
        private followed_id: string)
        {}

    public getUserId = (): string => {
        return this.user_id
    }

    public getFollowed_id = (): string => {
        return this.followed_id
    }
}