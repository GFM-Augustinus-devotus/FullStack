import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

const gabriel = new Thief('Gabriel', 5000, 1200, 1000)
const katu = new Mage('Katu', 4700, 1350, 1000, 50)
const Deusdeth = new Warrior('Deusdeth', 5200, 1500, 1200, 100)

console.log(gabriel)
console.log(katu)
console.log(Deusdeth)

console.log(gabriel.toAttack(katu))
console.log(katu.toAttack(gabriel))
console.log(gabriel.toAttack(Deusdeth))
console.log(katu.toAttack(Deusdeth))
console.log(Deusdeth.toAttack(gabriel))

Deusdeth.switchMode()

console.log(Deusdeth.toAttack(gabriel))


console.log('\n\n\n\n')
gabriel.showHP()


console.log(katu.toHeal(gabriel))

console.log(gabriel)
console.log(katu)

console.log(katu.toHeal(gabriel))
console.log(katu.toHeal(gabriel)) // Testando condição do Heal
console.log(katu.toHeal(gabriel))

console.log(katu)

