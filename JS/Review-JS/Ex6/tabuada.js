const numero = document.getElementById("numero")

const labelResult = document.createElement('label')
labelResult.className = "resultado"

function calcularResultado(){
    // Valida o número de entrada
    const n = Number(numero.value) || 0
    let resultado = ''
    for(let i = 1; i <= 20; i++){
        resultado += i * n + " ";
    }

    labelResult.innerText = resultado
    document.body.appendChild(labelResult)
}




