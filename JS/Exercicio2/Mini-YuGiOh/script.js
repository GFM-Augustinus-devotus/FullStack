//CardMonster Class

CardMonster ={
    name: "",
    type: "",
    attack: 0,
    defence: 0,
    LifePoints: 0,
    shield: false,
    situation: "" // Attack or Defence
}

//Function Inicilize a Object fron CardMonster Class

function createCard(name, type, attack, defence, LifePoints, shield, situation){
    let card = Object.create(CardMonster);
    card.name = name;
    card.type = type;
    card.attack = attack;
    card.defence = defence;
    card.LifePoints = LifePoints;
    card.shield = shield;
    card.situation = situation;
    return card;
}

// For now, Ifixed the values of the cards. But I can create a function to get the values from the user.

let CardAttack = createCard("Blue-Eyes White Dragon", "Dragon", 3000, 2500, 4000, false, "A");
let CardDefence = createCard("Dark Magician", "Magician", 2500, 2100, 4000, false, "D");

//Function that simulate an attack between two cards.

function attack(card1, card2){
    if(card1.attack > card2.defence && card2.shield == false){
        alert(`${card1.name} atacou ${card2.name}. O dano causado foi de ${card1.attack - card2.defence} pontos de vida.`);
        card2.LifePoints -= card1.attack - card2.defence;
        card2.LifePoints === 0 ? alert(`${card2.name} foi destruído!`) : alert(`O mestre da carta ${card2.name} agora possui ${card2.LifePoints} pontos de vida.`);
    } else if(card1.attack > card2.defence && card2.shield == true){
        alert(`${card1.name} atacou ${card2.name}. O dano causado foi de ${(card1.attack - card2.defence)/2} `);
        card2.LifePoints -= (card1.attack - card2.defence)/2;
        card2.LifePoints === 0 ? alert(`${card2.name} foi destruído!`) : alert(`O mestre da carta ${card2.name} agora possui ${card2.LifePoints} pontos de vida.`);
    } else {
        alert(`${card1.name} atacou ${card2.name}. O ataque foi bloqueado.`);
    }
}

//Showing the results
attack(CardAttack , CardDefence);