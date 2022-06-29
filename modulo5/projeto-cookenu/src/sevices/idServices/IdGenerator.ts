import { v4 } from 'uuid'

export default class IdGenerator {
    generateId = () => {
        const newId = v4()
        return newId;
    }
}