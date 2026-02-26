let valor = parseFloat(window.prompt("Digite o valor em metros"))
const unidadeMedida = window.prompt("Escolha uma unidade de medida\n-milímetro(mm)\n-centímetro(mm)\n-decímetro(dm)\n-decâmetro(dam)\n-hectômetro(hm)\n-kilômetro")

switch (unidadeMedida){
    case "mm":
        alert("Valor(mm): " + valor*1000)
        valor = 0
        break
    case "cm":
        alert("Valor(cm): " + valor*100)
        valor = 0
        break
    case "dm":
        alert("Valor(dm): " + valor*10)
        valor = 0
        break
    case "dam":
        alert("Valor(dam): " + valor/10)
        valor = 0
        break
    case "hm":
        alert("Valor(hm): " + valor/100)
        valor = 0
        break
    case "km":
        alert("Valor(km): " + valor/1000)
        valor = 0
        break
    default:
        alert("Escolha uma medida correta")
}

