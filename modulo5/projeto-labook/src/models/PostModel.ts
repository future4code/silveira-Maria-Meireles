export default class PostModel {
    constructor(
        private id: string,
        private photo: string,
        private creationDate: string,
        private description: string,
        private type: string
    ){}

    public getPostId = (): string => {
        return this.id
    }

    public getPostPhoto = (): string => {
        return this.photo
    }

    public getCreationDate = (): string => {
        return this.creationDate
    }

    public getPostDescription = (): string => {
        return this.description
    }

    public getPostType = (): string => {
        return this.type
    }

}