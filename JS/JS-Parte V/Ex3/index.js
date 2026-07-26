import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";

const gabriel = new Thief('Gabriel', 5000, 1200, 1000)
const katu = new Mage('Katu', 4700, 1350, 1000, 50)

console.log(gabriel)
console.log(katu)

console.log(gabriel.toAttack(katu))
console.log(katu.toAttack(gabriel))
console.log(katu.toHeal(gabriel))

console.log(gabriel)
console.log(katu)

console.log(katu.toHeal(gabriel))
console.log(katu.toHeal(gabriel)) // Testando condição do Heal
console.log(katu.toHeal(gabriel))

console.log(katu)