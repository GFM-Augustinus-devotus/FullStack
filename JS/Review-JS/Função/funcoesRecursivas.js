//Função Recursiva é uma função que chama ela mesma.
//Ela cria uma pilha de chamadas recursivas
//Atenção para não gerar um loop infinito

function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num/2)
    }else{
        return num
    }
}

dividir(64)

function dobrar(num){
    console.log(num)
    if(num > 1000){
        return
    }
    dobrar(num*2)
}

dobrar(1)

function fatorial(num){
    console.log(num)
    if(num === 0 || num === 1){  // Caso base para funções recursivas
        return 1
    }else{
        return num * fatorial(num-1) // Volta a pilha de chamadas com o resultado do fatorial
    }
}

console.log(fatorial(10))
