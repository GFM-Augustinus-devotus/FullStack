function cadastrar(){

    const lista = document.getElementById("lista")
    const nomeEl = document.getElementById("nome")
    const posicaoEl = document.getElementById("posicao")
    const camisaEl = document.getElementById("camisa")

    const nome = nomeEl.value.trim() // trim() retira os espaços vazios 
    const posicao = posicaoEl.value.trim()
    const camisa = camisaEl.value.trim()

    if (!nome || !posicao || !camisa) {
        alert('Preencha nome, posição e número da camisa.');
        return
    }

    const confirmation =  confirm("Escalar " + nome + " como " + posicao + "?" )
    
    if (confirmation) {
        
        // evita número de camisa duplicado
        const exists = Array.from(lista.querySelectorAll('li')).some(li => li.dataset.camisa === camisa)

        if (exists) {
            alert('Número de camisa já está escalado.');
            return
        }

        const li = document.createElement('li')
        li.dataset.camisa = camisa
        //Cada jogador vai ter um id de acordo com o valor do número da camisa
        li.id = 'jogador-'+camisa

        // formato simples: Posição - Nome (Camisa N)
        li.textContent = `${posicao} - ${nome} ( ${camisa} )`

        lista.appendChild(li)

        // limpa campos
        nomeEl.value = ''
        posicaoEl.value = ''
        camisaEl.value = ''
    }


}

function remover(){
    const lista = document.getElementById("lista")
    const camisaRemover = document.getElementById("camisa_remover").value.trim()

    if (!camisaRemover) {
        alert('Informe o número da camisa a remover.')
        return
    }    

    const confirmation =  confirm("Remover o jogador de camisa " + camisaRemover + "?")

    if (confirmation){

        const li = Array.from(lista.querySelectorAll('li')).find(li => li.dataset.camisa === camisaRemover)

        if (!li) {
            alert('Jogador com esse número não encontrado.')
            return
        }

        lista.removeChild(li)
        document.getElementById("camisa_remover").value = ''
    }

}