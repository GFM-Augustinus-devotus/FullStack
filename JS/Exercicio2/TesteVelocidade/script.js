
Veicule1 = {
    model: "",
    year: 2020,
    color: "Vermelho",
    price: 30000,
    speed: 0
}

Veicule2 = {
    model: "",
    year: 2021,
    color: "Preto",
    price: 40000,
    speed: 0
}    

function speed1() {
    Veicule1.model = window.prompt("Digite o modelo do veículo 1: ")
    Veicule1.speed = parseFloat(window.prompt("Digite a velocidade do veículo 1: "))   
}

function speed2() {
    Veicule2.model = window.prompt("Digite o modelo do veículo 2: ")
    Veicule2.speed = parseFloat(window.prompt("Digite a velocidade do veículo 2: "))
}

function speedComparing() {
    
    if (Veicule1.speed > Veicule2.speed){
        alert(`${Veicule1.model} é mais rápido que o ${Veicule2.model}.`)
    } else if (Veicule2.speed > Veicule1.speed){
        alert(`${Veicule2.model} é mais rápido que o ${Veicule1.model}.`)
    } else {
        alert("Os veículos possuem a mesma velocidade.")
    }
}

speed1()
speed2()
speedComparing()