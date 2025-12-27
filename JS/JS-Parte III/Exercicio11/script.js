function cadastrar(){

    const lista = document.getElementById("lista")
    const nomeEl = document.getElementById("nome")
    const posicaoEl = document.getElementById("posicao")
    const camisaEl = document.getElementById("camisa")

    const nome = nomeEl.value.trim()
    const posicao = posicaoEl.value.trim()
    const camisa = camisaEl.value.trim()

    if (!nome || !posicao || !camisa) {
        alert('Preencha nome, posição e número da camisa.');
        return
    }

    // evita número de camisa duplicado
    const exists = Array.from(lista.querySelectorAll('li')).some(li => li.dataset.camisa === camisa)
    if (exists) {
        alert('Número de camisa já está escalado.');
        return
    }

    const li = document.createElement('li')
    li.dataset.camisa = camisa
    // formato simples: Posição - Nome (Camisa N)
    li.textContent = `${posicao} - ${nome} (Camisa ${camisa})`

    lista.appendChild(li)

    // limpa campos
    nomeEl.value = ''
    posicaoEl.value = ''
    camisaEl.value = ''
}

function remover(){
    const lista = document.getElementById("lista")
    const camisaRemover = document.getElementById("camisa_remover").value.trim()

    if (!camisaRemover) {
        alert('Informe o número da camisa a remover.')
        return
    }

    const li = Array.from(lista.querySelectorAll('li')).find(li => li.dataset.camisa === camisaRemover)

    if (!li) {
        alert('Jogador com esse número não encontrado.')
        return
    }

    lista.removeChild(li)
    document.getElementById("camisa_remover").value = ''
}