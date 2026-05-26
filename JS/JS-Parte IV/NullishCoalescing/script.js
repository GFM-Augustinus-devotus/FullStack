/*Ignora valores Nulos Ou Undefined. No caso de True or False ele não Ignora*/
/* Lembre que o JS converte alguns valores para false quando possível como 0 e Null*/

/*Retorna o operando do lado direito caso o operando do lado esquerdo é Null, senão retorna o esquerdo */

const a = 0 //False
const b = null //False
const c = "Teste" //True

console.log(a || b || c)

console.log(a ?? b ?? c) //Ignora o False e analisa apenas o nulo

/*Podemos utilizá-lo em atribuições de Variáveis para que elas não recebam valores Null ou Undefined*/

const nomes = ["Gabriel", "Daniel", "Gustavo", "Matheus" , ,]

const d = nomes[8] ?? "Sem Nome"

console.log(d)

const e = nomes[4] ?? "Sem Nome"

console.log(e)

console.log(nomes[8] ,nomes[4])