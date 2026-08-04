import { Character } from "./Character.js";
export {Mage}

class Mage extends Character {
    constructor(name, hp, attack, defense, magica){
        super(name,hp, attack, defense)
        this.magica = magica
    }
    toAttack(target){ // No caso do Mage o valor do ataque do mago é somado a sua magia
        const targetDefense = this.verifyWarrior(target) ? target.defense + target.shieldPoints : target.defense

        if((this.attack + this.magica) >= targetDefense){
            target.hp -= ((this.attack + this.magica)- targetDefense)
            return `- *Mage* - 
            O dano foi de: ${(this.attack + this.magica) - targetDefense}` 
        }else{
            return `Seu ataque foi bloqueado pela defesa`
        }
    }
    toHeal(target){ // No meu caso a cada Heal utilizado o valor da magia cai pela metade e deve ser maior que custo da Magia, no caso do Heal é 10
        if(this.magica >= 10){
            target.hp += 2*(this.magica)
            this.magica -= (this.magica)/2
            return `HP de ${target.name} é de ${target.hp}`
        }else{
            return `Sua mana esgotou!!`
        }
    }
}