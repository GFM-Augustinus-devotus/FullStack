// Arrays possie, várias funções
// Dentro do Array pode ter diferentes tipos primitivos

let frutas = ['abacaxi', 'morango', 'uva', 'pêssego']

frutas.pop() // Retira do final do array

frutas.push('acerola') // Adiciona no Final do array

frutas.push('amora', 'laranja', 'maçã')

frutas.unshift('Abacate', 'Graviola') // Adiciona elementos no inicio do array

const fruta = frutas.shift() // Retira do início do array

console.log(frutas)
console.log('Quantidade de frutas: ' + frutas.length +' ---> ' + frutas) // Transformando numa String
console.log('Fruta removida:' + fruta)

// Buscando elementos dentro de uma Array

const inclui = frutas.includes('Graviola') // Retorna TRUE se o elemento está dentro do array

console.log(inclui)

const indice = frutas.indexOf('amora') // Retorna a posição do elemento no array

console.log(indice)

// Cortar ou concatenar o arry

const frutas2 = frutas.slice(2 , 5) // Vai criar uma array de Cópia com os elementos de indice 2,3 e 4
// 2° parâmetro é opcional
console.log(frutas2)

const frutas3 =  frutas.slice(-7) // índices negativos inverte a ordem de referência do array

console.log(frutas3)