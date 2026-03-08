let baralho = ["4 paus", "7 copas", "A espadas", "7 ouros"]

// No cado do DOM contentLoaded serve para garantir que os elementos estejam disponíveis antes de acessá-los
window.addEventListener('DOMContentLoaded', function() {
    const pilha = document.getElementById('baralho')
    const nomeCarta = document.getElementById("nomeCarta")
    const naipeCarta = document.getElementById("naipeCarta")

    function mostrarBaralho(){
        pilha.innerHTML = '';
        for(let i = baralho.length-1 ; i >= 0; i--){
            const newLi = document.createElement('li')
            newLi.innerText = baralho[i]
            pilha.append(newLi)
        }
    }

    function adicionar(){
        const nome = nomeCarta.value;
        const naipe = naipeCarta.value;
        if (nome && naipe) {
            const carta = nome + " " + naipe;
            baralho.push(carta);
            mostrarBaralho();
        }else{
            alert("Insira uma carta corretamente")
        }
    }

    function remover(){
        if(baralho.length>0){
            baralho.pop()
            mostrarBaralho()
        }else{
            alert("O baralho está vazio")
        }
    }



    window.adicionar = adicionar;
    window.remover = remover;

    mostrarBaralho();

});
