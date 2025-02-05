
let resultado = ""
let numero = parseFloat(window.prompt("Digite um número inteiro: "))

for(let i = 1 ; i <= 20 ; i++){
    resultado += numero*i + " | "
}

document.addEventListener("DOMContentLoaded" , function(){
    const num = document.getElementById("numero")
    const res = document.getElementById("resultado")
    num.textContent = "Tabuada do número: " + numero
    res.textContent = resultado
})