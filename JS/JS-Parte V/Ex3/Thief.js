import { Character } from "./Character.js";
export {Thief}

class Thief extends Character{
    constructor(name, hp, attack, defense){
        super(name, hp, attack, defense)
    }
    toAttack(target){ // Thief o ataque é multiplicado por 2
        const targetDefense = this.verifyWarrior(target) ? target.defense + target.shieldPoints : target.defense

        if(this.attack >= targetDefense){
            target.hp -= 2*((this.attack - targetDefense))
            return `- *Thief Attack* - 
            O dano foi de: ${2*(this.attack - targetDefense)}` 
        }else{
            return `Seu ataque foi bloqueado pela defesa` 
        }
    }
}