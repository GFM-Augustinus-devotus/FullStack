let idade = 0

idade = window.prompt("Digite sua idade: ")

if (idade >= 18) {
    window.alert("Você é maior de idade!")
} else if (idade >= 0) {   
    window.alert("Você é menor de idade!")
} else{
    window.alert("Idade inválida!")
}

//Operador Ternário

idade >= 18 ? alert("Parbéns você atingiu a maioridade!") : idade < 0 ? alert("Idade inválida!")  : alert("Você não atingiu a maioridade!")

