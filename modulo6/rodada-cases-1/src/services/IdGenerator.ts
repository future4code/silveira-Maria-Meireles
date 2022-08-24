import { v4 } from 'uuid'

export default class IdGenerator {
    createId = (): string => {
        return v4()
    }
}