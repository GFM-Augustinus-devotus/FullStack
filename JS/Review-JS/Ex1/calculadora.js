let valor1 = 0
let valor2 = 0

function soma(valor1,valor2){
    return valor1 + valor2
}

function subtracao(valor1,valor2){
    return valor1 - valor2
}

function multiplicacao(valor1,valor2){
    return valor1 * valor2
}

function divisao(valor1,valor2){
    if (valor2 == 0) {
        return Infinity
    }else{
        return valor1/valor2
    }
}

valor1 = parseFloat(window.prompt("Insira o primeiro valor"))
valor2 = parseFloat(window.prompt("Insira o segundo valor"))

window.alert("\tRESULTADOS\nSoma: " + soma(valor1,valor2) + 
    "\nSubtração: " + subtracao(valor1,valor2) + 
    "\nMultiplicação: " + multiplicacao(valor1,valor2) + 
    "\nDivisão: " + divisao(valor1,valor2)
)