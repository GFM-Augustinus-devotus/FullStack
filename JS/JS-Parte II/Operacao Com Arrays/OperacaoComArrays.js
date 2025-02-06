/*No JS os arrays tem vários comportamentos como de lista, filha, pilha etc... */

const Array = ["Frodo" , "Sam" , "Merry" , "Pippin" , "Gandalf" , "Aragorn", "Legolas", "Gimli"]
console.log(Array)
//Adicionar elementos. Ambos devolvem o tamanho do array
//Push --> (Adiciona um novo elemento no final do Array)

const Total1 = Array.push("Boromir")
console.log(Array)
console.log(Total1)
//Unshitf --> (Adiciona um novo elemento no começo do array)

const Total2 = Array.unshift("Teste")
console.log(Array)
console.log(Total2)

/* --------------------------------------- */

//Remover elementos
//Pop --> (Remove o último elemento do array e devolve ele, pode armazenar numa variável)

const Boromir = Array.pop()
console.log(Array)
console.log(Boromir)

//Shift --> (Remove elementos do começo do array)

const Teste = Array.shift()
console.log(Array)
console.log(Teste)

/* --------------------------------------- */

/* Pesquisar por um elemento */
// Includes --> (Verifica um determinado valor está presente no array, ele retorna um boolenao)

const Verifica = Array.includes("Gandalf")
console.log(Verifica)

//indexOf --> (Saber o índice de um determinado elemento, devolve um valor inteiro que é o índice)

const Indice = Array.indexOf("Gimli")
console.log(Indice)
/* --------------------------------------- */

//Cortar, Concatenar e Substituir os arrays
//Slice --> (Faz um a cópia de uma parte do array. Deve indicar o começo e o fim do corte. Sinal negativo muda a ordem do corte)

const Hobbits = Array.slice(0 , 4)
console.log(Hobbits)

const outros = Array.slice(-4)
console.log(outros)

//concat --> (Concatenar arrays e mais elementos dentro do mesmo array)

const Sociedade = Hobbits.concat(outros , "Boromir")
console.log(Sociedade)

//splice --> (Emendar elementos na lista, tira um e coloca outra outro. Retorna um array dos elemetos removidos)

const Gandalf = Sociedade.splice(4 , 1, "Gandalf, o cinzento") //Precisa indicar quantos elementos irá enmendar
console.log(Sociedade)
console.log(Gandalf) // Gera um novo array com os elementos removidos

/* --------------------------------------- */

//Iterar sobre os elemntos do array

for(i = 0; i < Sociedade.length ; i++){
    const elemento = Sociedade[i]
    console.log(elemento + " Tem índice = " + i)
}




