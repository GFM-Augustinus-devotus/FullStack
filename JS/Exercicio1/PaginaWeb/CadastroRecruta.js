//  Cadastro do recruta
/* Consigo mostrar os dados pelo window e pela p´ropria página
Atrnção o cálculo da idade está considerando apenas o ano de nascimento do Recruta
*/ 
let Nome = ""
let SobreNome = ""
let CargoDeEstudo = ""
let DataNascimento = ""

//Prompt retorna sempre uma string

Nome = window.prompt("Digite seu nome: ")
SobreNome = window.prompt("Digite seu sobrenome: ")
DataNascimento = window.prompt("Digite sua data de nascimento: ")
CargoDeEstudo = window.prompt("Digite seu cargo de estudo: ")

function calculaIdade(){
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNascimento = DataNascimento.split("/")[2]
    let idade = anoAtual - anoNascimento
    return idade
}

function MostrarDados() {
    window.alert("Nome: " + Nome + " " + SobreNome + "\nIdade: " + calculaIdade() + "\nCargo de Estudo: " + CargoDeEstudo)
}

MostrarDados()

function MostrarDadosPaginaWeb() {
    let DadosRecruta = document.getElementById("DadosRecruta")
    DadosRecruta.innerHTML = "Nome: " + Nome + " " + SobreNome + "<br>Idade: " + calculaIdade() + "<br>Cargo de Estudo: " + CargoDeEstudo
}

document.addEventListener("DOMContentLoaded", function() {
    MostrarDadosPaginaWeb()
})