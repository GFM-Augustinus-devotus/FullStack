// Calculadora das 4 operações básicas para dois valores numéricos

let value1 = 0.0
let value2 = 0.0

function soma(value1 , value2){
    return value1 + value2
}

function subtracao(value1 , value2){
    return value1 - value2
}

function multiplicacao(value1 , value2){
    return value1 * value2
}

function divisao(value1 , value2){
    if(value2 === 0){
        return "Não é possível dividir por zero!"
    }
    return value1 / value2
}

function carregarValores(){
    value1 = parseFloat(window.prompt("Digite o primeiro valor: "))
    value2 = parseFloat(window.prompt("Digite o segundo valor: "))
}

function MostrarResultados(){
    let resultados = document.getElementById("ResultadoCalculadora")
    resultados.innerHTML = "Resultados para os valores " + value1 +  " e " + value2 + " <br> Soma: " + soma(value1, value2) + " <br> Subtração: " + subtracao(value1,value2) +  " <br> Multiplicação: " + multiplicacao(value1,value2) + " <br> Divisão: " + divisao(value1,value2)
}

document.addEventListener("DOMContentLoaded", function(){
    carregarValores()
    MostrarResultados()
})