const idade = parseFloat(window.prompt("Informe a sua idade"))

if (idade >= 18){
    alert("Você é maior de idade")
}else if (idade > 12){
    alert("Você é menor de idade")
}else if (idade > 4){
    alert("Você é uma criança")
}else if (idade > 0){
    alert("Você é um Bebê")
}
//Operador ternário já atribui
const idadeUsuario = (idade == 18) ? alert("Parabéns pelos 18 anos") : null 
console.log(idadeUsuario)