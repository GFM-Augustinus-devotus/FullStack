
// Decopondo um numero pelos numeros primos 7 , 5 ,  3 , 2

function decompondoEmNumerosPrimos(num){
    console.log(num)
    if (num === 1){
        return 1
    }
    if (num % 7 === 0){
        console.log(num + "/ 7")
        return decompondoEmNumerosPrimos(num/7)

    }else if (num % 5 === 0 ){
        console.log(num + "/ 5")
        return decompondoEmNumerosPrimos(num/5)
    
    }else if (num % 3 === 0){
        console.log(num + "/ 3")
        return decompondoEmNumerosPrimos(num/3)
    
    }else if (num % 2 === 0){
        console.log(num + "/ 2")
        return decompondoEmNumerosPrimos(num/2)
    }
}
console.log(decompondoEmNumerosPrimos(210))

// Calculando o Fatorial de um numero natural

function fatorial(num){
    if (num === 1 || num === 0){
        return 1
    }else{
        return num * fatorial(num - 1)
    }
}
console.log("\nO fatorial de 7 é")
console.log(fatorial(7))
