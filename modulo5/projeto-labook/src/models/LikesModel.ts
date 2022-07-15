export default class LikeModel {
    constructor(
        private user_id: string,
        private posts_id: string
    ){}

    public getUserId = (): string => {
        return this.user_id
    }

    public getPostsId = (): string => {
        return this.posts_id
    }
} 