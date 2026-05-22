/*Um forma diferente para escrever funções anônimas 
Não possui sus próprios this , arguments , super e new.target
Retornar um valor diretamente caso a Arrow Function tenha apenas uma única linha
*/

const multiply = (a,b) => a*b

console.log(`5 * 6 = ${multiply(5,6)}`)

/*Muito comum usada para manipular arrays com HighOrderFunction*/

const nomes = ['Gabriel' , 'Daniel', 'Igor', 'Yuri', 'João']

nomes.forEach(name => console.log(name))