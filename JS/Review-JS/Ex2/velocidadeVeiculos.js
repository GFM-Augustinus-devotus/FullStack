const veiculo1 = window.prompt("Informe o nome do primeiro veículo")
const velocidade1 = parseFloat(window.prompt("Informe a velocidade do " + veiculo1 +  " em km/h"))
const veiculo2 = window.prompt("Informe o nome do segundo veículo")
const velocidade2 = parseFloat(window.prompt("Informe a velocidade do " + veiculo2 + " em km/h"))

if (velocidade1 > velocidade2){
    window.alert(veiculo1 + " é mais rápido")
}else if(velocidade2 > velocidade1){
    window.alert(veiculo2 + " é mais rápido")
}else{
    window.alert("Os dois veículos têm a mesma velocidade")
}