export {Character}

class Character {
    constructor(name, hp, attack, defense){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
    }
    toAttack(target){ // No caso vai passar como parâmetro o objeto que é alvo do ataque
        if(this.attack >= target.defense){
            target.hp -= (this.attack - target.defense)
            return `O dano foi de: ${this.attack - target.defense}` 
        }else{
            return `Seu ataue foi bloqueado pela defesa` // Numa futura versão podemos fazer um sistema de contra-ataque
        }
    }
}