const monsterName1 = window.prompt("Enter the name of the first monster")
const ATK1 = window.prompt("Enter the power attack of "+ monsterName1)
const monsterName2 = window.prompt("Enter the name of the second monster")
const healthPoints2 = window.prompt("Enter the heath points of "+ monsterName2)
const DEF2 = window.prompt("Enter the defense points of "+ monsterName2)
const shield = (window.prompt("Does " + monsterName2 + " have a shield?") == "yes") ? true : false
let hpFinal2 = 0
let damage = 0

function battleResults(name1, atk1, name2, def2, hpFinal, damage){
    window.alert(name1 + "\nATK: "+ atk1 + "\n\n" + name2 + "\nDEF: "+ def2 + "\nHP: " + hpFinal + "\n\nFinal Damge: " + damage)
}

function monsterAttack(name1, atk1, name2, def2, hp2, shield){
    if ((atk1 > def2) && shield){
        damage = (atk1 - def2)/2
        hpFinal2 = hp2 - damage 
        battleResults(name1, atk1, name2, def2, hpFinal2, damage)
    
    }else if(atk1 > def2){
        damage = atk1 - def2
        hpFinal2 = hp2 - damage
        battleResults(name1, atk1, name2, def2, hpFinal2, damage)
    }else{
        damage = 0
        hpFinal2 = hp2 - damage
        battleResults(name1, atk1, name2, def2, hpFinal2, damage)
    }
}

monsterAttack(monsterName1, ATK1, monsterName2, DEF2, healthPoints2, shield)

