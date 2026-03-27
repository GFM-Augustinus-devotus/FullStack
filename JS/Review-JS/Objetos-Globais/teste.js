// Objetos Globais são nativos da própria linguagem Javascript
// Usados em casos específicos
// diferente de Escopo global window que é do navegador

//Exemplos (Object, Array, String, Number, Date, Math)
// Possui vários métodos e funções

let pessoa = Object()
console.log(pessoa)

let lista = Array()
console.log(lista)

console.log(String(45)) // Converte uma string

console.log(Number("30")) // Converte um numero

console.log(Number.isInteger(8.56))

console.log(Date())

console.log(Math.random())

//Os objetos, arrays, strings, etc que nós criamos dentro do nosso código são derivados desses objetos globais