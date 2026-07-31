export {Character}

class Character {
    constructor(name, hp, attack, defense){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
    }

    verifyWarrior(target){ // Verifica se é um guerreiro ou não
        return target && typeof target === "object" && "shieldPoints" in target
    }

    toAttack(target){
        const targetDefense = this.verifyWarrior(target) ? target.defense + target.shieldPoints : target.defense

        if(this.attack >= targetDefense){
            target.hp -= (this.attack - targetDefense)
            return `O dano foi de: ${this.attack - targetDefense}` 
        }else{
            return `Seu ataue foi bloqueado pela defesa`
        }
    }

    showHP(){
        console.log(`\nO HP do personagem ${this.name} é de ${this.hp}\n`)
    }
}