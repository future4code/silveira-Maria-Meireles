export default class IntermediateModel {
    constructor(
        private user_id: string,
        private friends_id: string 
    ){}

    public getUserId = (): string => {
        return this.user_id
    }

    public getFriendsId = (): string => {
        return this.friends_id
    }
}