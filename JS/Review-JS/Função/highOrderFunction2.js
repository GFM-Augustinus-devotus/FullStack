// Métodos de Arrays

const monsters = [ //Array de Objetos
    {stars: 7, name: "Kyser Dragon", type: "Dragon", attribute: "Light", pc:48},
    {stars: 6, name: "Skelgon", type: "Zombie", attribute: "Dark", pc: 41},
    {stars: 6, name: "Aqua Dragon", type: "Sea Serpent",  attribute: "Water", pc: 46 },
    {stars: 6, name: "Flame Cerebus",type: "Pyro", attribute: "Fire", pc: 47},
    {stars: 6, name: "Mystical Sand", type: "Rock", attribute: "Earth", pc:38},
    {stars: 6, name: "Punished Eagle", type: "Winged-Beast", attribute: "Earth", pc:36},
    {stars: 3, name: "Baby Dragon", type: "Dragon", attribute: "Wind", pc: 28 }

]
//Map (Cria um novo array a partir de um array existente)

const nomes = monsters.map(function (monsters){ //Função de callback recebe o Value, índice e o array
    return monsters.name
})

console.log(nomes)

//Filter (Filtrar o Array)

const sixStars = monsters.filter(function(monsters){
    return monsters.stars == 6 // O retorno indica o que vai ser filtrado
})

console.log(sixStars)

//Reduce (Transforma o array em outra coisa) ===> Neste caso transformou em um resultado numérico

const pc = monsters.reduce(function(valorAcumulado, monster){
    return valorAcumulado + monster.pc
}, 0)

console.log("PC total: " + pc)

// Outro exemplo de reduce para transformar o array em um objeto classificado por raças

const type = monsters.reduce(function(valorAcumulado, monster){
    if(valorAcumulado[monster.type]){ // Verifica se a chave existe
        valorAcumulado[monster.type].push(monster)
    }else{
        valorAcumulado[monster.type] = [monster]
    }
    return valorAcumulado
}, {}) // Valor inicial é um objeto vazio

//Método muito útil

console.log(type)

// Sort (Ordenar elementos de um array). Vou ordenar pelo nível PC de minhas cartas
// Ele modifica o array de origem e não cria um novo
// o Slice sem nenhum parâmentro cria uma cópia do Array e no caso eu vou fazer um sort apenas com o array de cópia

const monstersPC = monsters.slice().sort(function (a,b){ //Se a - b > 0 coloca o a depois de b. Se for negativo, mantém o elemento a antes de b.
    return a.pc - b.pc  //Deixei na ordem decrecente
})

console.log("Desordenado:")
console.log(monsters)
console.log("Ordenado de forma crescente pelo valor de PC:")
console.log(monstersPC)