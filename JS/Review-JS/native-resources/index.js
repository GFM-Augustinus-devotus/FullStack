let nome =  "Gabriel"
//Representa o Console do navegador
console.log(nome)
console.error("Erro!!!") 
console.warn(nome)
//Representa a aba do navegador

//window.alert(nome) ----- Objeto global do navegador
nome = window.prompt("Insira o seu nome: ")

console.log(nome)

let confirmacao = window.confirm("Confirma essa ação?")

console.log(confirmacao)

//Referente a página HTML
document.append