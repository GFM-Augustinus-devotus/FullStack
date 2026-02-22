let nome = ""
let sobreNome = ""
let campoEstudo = ""
let anoNascimento = ""

nome = window.prompt("Qual o nome do Recruta?")
sobreNome = window.prompt("Qual o sobrenome do Recruta?")
campoEstudo = window.prompt("Qual o campo de estudos do Recruta?")
anoNascimento = parseFloat(window.prompt("Qual a ano de nascimento do Recruta?"))

let idade = 2026 - anoNascimento
let nomeCompleto = nome + " " + sobreNome

window.alert("Nome: "+ nomeCompleto + "\nCampo de estudo: "+ campoEstudo + "\nIdade: " + idade)