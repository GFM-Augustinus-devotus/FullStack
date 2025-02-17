OlaMundo()

function OlaMundo(){
    console.log("Olá Mundo")
}

const TchauMundo  = function(){
    console.log("Tchau Mundo")
}

TchauMundo()

//Agora usando as HighOrder Functions

function calcular(a , b , operacao){
    console.log("Realizando uma operação")
    return operacao(a , b)
}

function somar(a , b){
    console.log("Somar")
    return a + b
}

function subtrair(a ,b){
    console.log("Subtrair")
    return a - b
}

console.log(calcular(8 , 2 , somar))
console.log(calcular(8 , 2, subtrair))

// HighOrderFuntion com Função Anônima

console.log(calcular(8 , 2, function(a , b){
    console.log("Dividir")
    return a/ b
}))

// Exemplo de uma HighOrderFunction é o método forEach de um Array e também de arrow function

lista = ["Santos", "São Paulo", "Corinthians", "Palmeiras"]

lista.forEach(element => {
    console.log(element)
});