/*Rest Parameters é o restante de parâmetros que são passados dentro de uma Função
Vale lembrar que se tiliza o operador ... como no spread mas no caso ele transformao o parâmetro em 
um array o qual pode-se chamar as funções próprias do array */

function sum(...numbers){
    return numbers.reduce((acum , num) => acum + num , 0)
}

console.log(sum(1/7 , 2/7, 3/7, 4/7, 5/7, 6/7, 1)) /*Somo todos os valores. Posso colocar quantos parâmetros eu desejar*/

/*Vale lembrar que ...numbers deve vir por último */

/*Exercise*/

const f = (...args) => {
    console.log(args[0], args[args.length - 1])
    console.log(args)
}
f(1,2,3,4,5,6)