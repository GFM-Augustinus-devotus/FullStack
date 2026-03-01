//Exist diferent types of For in JS

const nomes = ['Mateus', 'Marcos', 'Lucas', 'João']

const user = {
    nome: 'Ana',
    idade: 28,
    cidade: 'Goiânia'
}

// #1 (Você controla o índice)

for(let k = 0; k < nomes.length; k++){
    console.log(`Índice ${k}: ${nomes[k]}`);
}
console.log("\n")
// #2 (Mais simples para manipular Arrays)

for(const nome of nomes){
    console.log(nome)
}
console.log("\n")
// #3 (Útil para percorrer propriedades de um objeto)

for(const chave in user){
    console.log(`${chave}: ${user[chave]}`)
}
console.log("\n")
// #4 (Iterar sobre fontes de dados assíncronas, pode ser lista de promessar ou Fluxo de dados (Strems))

async function printOrders(ids) {
    const promises = ids.map(id => Promise.resolve(`Order #${id}`));

    for await (const order of promises){
        console.log(order)
    }
}
printOrders([458, 810,329])


// #5 (útil para arrays que executa uma função para cada elemento do Array)

nomes.forEach((nome, index) =>{
    console.log(`${index}: Evangelho de São ${nome}`)
})

console.log("\n")



