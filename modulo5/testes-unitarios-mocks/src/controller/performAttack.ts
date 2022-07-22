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

export const performAttackWithInversion = (
    attacker: personagem,
    defender: personagem,
    characterValidation: (input: personagem) => boolean
  ) => {
    if (!characterValidation(attacker) || !characterValidation(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.forca > defender.defesa) {
      const lifeResult = defender.vida-= attacker.forca - defender.defesa
      return lifeResult
    }
  };