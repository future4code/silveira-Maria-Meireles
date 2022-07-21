import { personagem } from "../interfaces/personagem";
import { validadeCharacterInfo } from "./characterValidation";

export const performAttack = (attacker: personagem, defensor: personagem) => {
    if(!validadeCharacterInfo(attacker) || !validadeCharacterInfo(defensor)) {
        throw new Error("Invalid character.")
    }
    if(attacker.forca > defensor.defesa) {
        return defensor.vida -= attacker.forca - defensor.defesa 
    }
}