const name = window.prompt("Olá seja bem-vindo, qual o seu nome?")
let cities = []
let answer = ""
let cityCount = 0

while(answer !== "não"){
    answer = window.prompt("você já visitou alguma cidade?")
    if (answer == "sim"){
        cities[cityCount] = window.prompt("Qual cidade você já visitou?")
        cityCount ++ 
    }else{
        answer = window.prompt("Responda apenas sim ou não")
    }
    
}

window.alert(name + ", você visitou o total de "+ cityCount +" cidades dentre elas: "+ cities)
