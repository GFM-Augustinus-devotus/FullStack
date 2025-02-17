//An array of objects

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//Map: Map a part of a array


const nome = personagens.map(function(personagens){ //Return all the names of the personagens
    return personagens.nome
})

console.log(nome)

// Filter: Filter a specific topic of the array of objects

const Humano = personagens.filter(function(personagens){ //Return only characters of race = Human
    
    return personagens.raca === "Humano"
})

console.log(Humano)

//Reduce: Take a part of the array and produce a different value: Number, object or even a another array

const nivelTotal = personagens.reduce(function(value , personagem){ // Sum all levels of alll elements of personagens
    return value + personagem.nivel

}, 0)

console.log(nivelTotal)

//Return objects of each rece of personagens
const racas = personagens.reduce(function(valor, personagem){
    
    
    if(valor[personagem.raca]){

        valor[personagem.raca].push(personagem)

    }else{

        valor[personagem.raca] = [personagem]
    }

    return valor

} , {})

console.log(racas)

console.log(racas.Humano)

// Creating a copy before sorting the Array
const copia = personagens.slice()

copia.sort(function(a , b){
    return a.nivel - b.nivel
})

console.log(copia)

//Now inverting the order od the array

copia.sort(function(a , b){
    return b.nivel - a.nivel
})

console.log(copia)