//Métodos são funções atribuídas a objetos

let pessoa = {
    nome: "Gabriel",
    idade: 25,
    dizerOla(){
        console.log("Hello World Meu nome é "+ this.nome) // Referenciar ao próprio objeto dentro dele
    }
}
console.log(pessoa)
pessoa.dizerOla()   // Chamando o método de pessoa