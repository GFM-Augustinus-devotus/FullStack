//As funções podem ser lidas como valores

function somar (a , b){
    return a + b
}

// Sem parênteses. Você passa a função e não o que ela retorna
const operacao = somar

console.log(operacao(4,5))

// Função anônima não apresenta nome
const subtrair = function (c , d) {
    return c - d
}

console.log(subtrair(36,13))

// Possíveis usos: Mudar o comportamento da função de forma dinâmica

const olaMundo = function(){
    console.log("Hello World")
}
olaMundo() // Só pode chamar a variável que contém a função após a variáver ser inicializida
