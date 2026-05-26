/**Encadeamento Opcional. Ele verifica se o argumento do Objeto é Undefined. Caso seja Undefined, o Tradutor
 * do JS para a leitura e retorna Undefined. Isso evita o erro de  "Cannot read a propretie of Undefined!"
 * Há objetos que possui em seus parâmetros outros objetos e arrays e caso nós busquemos por algo que não exista acaba
 *  gerando erro mencionnado
 */

const user = {
    nome: "Violet",
    surname: "Van Everdeen",
    age: 18,
    address: {
        street: "S. KeyLoff",
        number: 47,
        City: "Marietta",
        State: "MaryLand",
        zipCode: "784-995.65",
        houses: ["ASX", "GHJ", "WER", "IOP"] 
    },
    parents: [father = {
        nome: "Ruffus Van Everdeen",
        age: 42
    }, mother ={
        nome: "Linda Lovelace",
        age: 38
    }],
    nickname: "Vio"
}
/*Usando o operador ?.*/ 
console.log(user.address.street)
console.log(user.address.street.name?.lk)
console.log(user.address.house?.[0]) /*Posso usar para verificar a existência de elementos no Array */
console.log(user.address.houses[0].key?.id)
console.log(user.address.houses?.[40]?.name)

console.log(user.parents[0]?.name)
console.log(user.parents[0].nome)

/*Curiosidade. Acesar propriedades dos objetos do Próprio JS */

console.log(console)
