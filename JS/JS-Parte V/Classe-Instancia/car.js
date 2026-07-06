class Car {
    constructor(name){
        this.name = name
        this.available = false
    }
    toAvail(){
        this.available = true
    }
}

const jetta = new Car("Jetta") //Instanciei um novo objeto
const golf = new Car("Golf")

jetta.toAvail() // Chamei a função do objeto criado

console.log(jetta)
console.log(golf)

// Verificar uma instância de uma classe

console.log(golf instanceof Car)