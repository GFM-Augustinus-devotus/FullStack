//Objetos é uma estrutura de chave-valor (propriedade)
//Chave é nome da propriedade e o valor é o resultado dessa propriedade
// Seus elementos não possuem uma sequência

let user = {
    nome: "Gabriel",
    idade: 14,
    profissão: "Programador",
    formacaoSuperior:  true,
    endereco: {
        rua: "Guajá",
        numero: 1,
        bairro: "Jardim Atlântico"
    }
}

let aluno = {
    prop: "Olá mundo"
}


console.log(user.nome)
console.log(aluno["Olá mundo"])
console.log(aluno.prop)

//----- Referenciando funções e propriedades dentro de objetos. Base do POO

let funcao = "log"

console[funcao]("Olá, bom dia")

// Chamando um objeto como todo. Em vez de passar uma variável por vez, passa todo objeto

console.log(user)

user.colegas = ["Maria, José, Sebastião"]

// Pode formar objetos dentro de objetos



