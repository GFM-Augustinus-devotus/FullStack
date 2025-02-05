
let palavra = window.prompt("Digite uma palvra: ")
let inverso = ""

for(let i = palavra.length - 1 ; i >= 0 ; i--){
    inverso += palavra[i]
}

if(palavra === inverso){
    window.alert("A palavra " + palavra + " é palíndromo")

    }else{
        window.alert("A palavra " + palavra + " não é palíndormo\n Ordem normal: " + palavra + "\n Ordem inversa: " + inverso)
    }
