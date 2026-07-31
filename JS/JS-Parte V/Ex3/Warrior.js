import { Character } from "./Character.js";
export {Warrior}

class Warrior extends Character{

    #attackOrDefense

    constructor(name, hp, attack, defense, shieldPoints){
        super(name, hp, attack, defense)
        this.shieldPoints = shieldPoints
        this.#attackOrDefense = true // Todo personagem inicia no modo ataque, ou seja, True
    }
    toAttack(target){ // No caso do Warrior deve verificar se ele está em modo de ataque ou defesa

        if(this.#attackOrDefense){
            const targetDefense = this.verifyWarrior(target) ? target.defense + target.shieldPoints : target.defense

            if(this.attack >= targetDefense){
                target.hp -= (this.attack - targetDefense)
                return `- *Warrior Attack* - 
                O dano foi de: ${this.attack - targetDefense}` 
            }else{
                return `Seu ataue foi bloqueado pela defesa` 
            }
        }else{
            return `O Warrior ${this.name} está no modo defesa, ele não pode atacar outro personagem`
        }
    }
    switchMode(){ //True --> Attack Mode , False --> Defense mode
        this.#attackOrDefense = ! this.#attackOrDefense
        return this.#attackOrDefense 
    }
}