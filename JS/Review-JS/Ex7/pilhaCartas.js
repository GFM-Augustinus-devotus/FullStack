let baralho = ["4 paus", "7 copas", "A espadas", "7 ouros"]
const pilha = document.getElementById('baralho')
const nomeCarta = document.getElementById("nomeCarta")
const naipeCarta = document.getElementById("naipeCarta")

function mostrarBaralho(){
    for(let i = baralho.length; i >= 0; i--){
        const newLi = document.createElement('li')
        newLi.className = "Cartas do baralho"
        newLi.id = i
        newLi.innerText = baralho[1]
        pilha.append(newLi)
    }
}

mostrarBaralho()