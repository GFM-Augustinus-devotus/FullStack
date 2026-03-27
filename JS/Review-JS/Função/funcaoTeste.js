// Funções normais eu posso chamá-las antes de iniciá-las

console.log(somar(6, 8))

function somar(a , b){
    return a + b
}

// Funções anônimas eu não posso chamá-las antes de iniciá-las, pois estão armazenadas dentro de uma variável
console.log(subtracao(6,8))


const subtracao = function(a,b){
    return a -b
}

