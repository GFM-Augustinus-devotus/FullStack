import { Character } from "./Character.js";
export {Thief}

class Thief extends Character{
    constructor(name, hp, attack, defense){
        super(name, hp, attack, defense)
    }
    toAttack(target){ // Thief o ataque é multiplicado por 2
        if(this.attack >= target.defense){
            target.hp -= 2*((this.attack - target.defense))
            return `- *Thief Attack* - 
            O dano foi de: ${2*(this.attack - target.defense)}` 
        }else{
            return `Seu ataue foi bloqueado pela defesa` 
        }
    }
}