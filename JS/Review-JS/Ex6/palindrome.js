const inputEl = document.getElementById("Palavra")

function enviarPalvra(){
    //Trata a entrada da palvra
    const palavra = String(inputEl.value || "").trim()
    let palavraInvertida = ""
    let palindorme = ""

    for(let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i]
    }

    if (palavra === palavraInvertida){
        palindorme = "A palavra " + palavra + " é palindrome"
    } else {
        palindorme = "A palavra " + palavra + " não é palindrome"
    }

    const label = document.createElement("label")
    const br = document.createElement("br")
    const label2 = document.createElement("label")
    label.className = "Palindrome"
    label.innerText = palavraInvertida
    label2.innerText = palindorme
    document.body.appendChild(br)
    document.body.appendChild(label)
    document.body.appendChild(br)
    document.body.appendChild(label2)
}