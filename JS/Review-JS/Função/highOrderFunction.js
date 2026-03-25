// É uma função que recebe outra função como parâmetro
//  Compilador empilha as funções e as executas em chamadas onde o retorno de uma influencia a outra

function calcular(a, b, operacao){ // A função mais externa engloba a função mais interna
    return operacao(a,b)
}

function somar(x, y){
    console.log("Realizando a operação de soma")
    return x + y
}

console.log(calcular(6 , 4, somar))

//Pode utilizar funções anônimas também
console.log(calcular(9,3,function(x , y){
    console.log("Realizando a operação de subtração")
    return x - y
}))

// Um exemplo de High Order Funtion é o forEach de um array. Você passa como parâmetro uma função de callback

const lista = ['BMW', 'AUDI', 'MERCEDES', 'PORSCHE']

lista.forEach(function(marca, indice, array){
    console.log(marca, indice, array)
})

