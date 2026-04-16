const buttonAdicionarTecnologia = document.getElementById('adicionar-tecnologia')
const buttonRemoverTecnologia = document.getElementById('remover-tecnologia')
const listaTecnologias = document.getElementById('listaTecnologias')
const formulario = document.getElementById('cadastro')
let indice = 0

buttonAdicionarTecnologia.addEventListener('click', function(ev){
    ev.preventDefault()
    indice++
    const liTecnologia = document.createElement('li')
    const labelTecnologia = document.createElement('label')
    const labelRadio1 = document.createElement('label')
    const labelRadio2 = document.createElement('label')
    const labelRadio3 = document.createElement('label')
    const inputTecnologia = document.createElement('input')
    const inputRadio1 = document.createElement('input')
    const inputRadio2 = document.createElement('input')
    const inputRadio3 = document.createElement('input')
    labelTecnologia.innerText = 'Tecnologia'
    inputTecnologia.name = 'tecnologias'
    inputTecnologia.type = 'text'
    labelRadio1.innerText = '1 a 2 anos'
    labelRadio2.innerText = '3 a 5 anos'
    labelRadio3.innerText = '+5 anos'
    inputRadio1.type = 'radio'
    inputRadio2.type = 'radio'
    inputRadio3.type = 'radio'
    inputRadio1.name = 'tempo-exp'+indice
    inputRadio2.name = 'tempo-exp'+indice
    inputRadio3.name = 'tempo-exp'+indice
    inputRadio1.value = '1 a 2 anos'
    inputRadio2.value = '3 a 5 anos'
    inputRadio3.value = '+5 anos'

    liTecnologia.append(labelTecnologia,inputTecnologia,inputRadio1,labelRadio1,inputRadio2,labelRadio2,inputRadio3,labelRadio3)
    listaTecnologias.append(liTecnologia)
})

buttonRemoverTecnologia.addEventListener('click', function(ev){
    ev.preventDefault()
    const listaItems = listaTecnologias.querySelectorAll('li')
    if(listaItems.length > 0){
        listaTecnologias.removeChild(listaItems[listaItems.length - 1])
        indice--
    }
})


formulario.addEventListener('submit', function(ev){
    ev.preventDefault()
    
    const nomeCandidato = document.querySelector('input[name="nome"]').value
    
    // Pegar todas as tecnologias
    const inputsTecnologias = document.querySelectorAll('input[name="tecnologias"]')
    const nomesTecnologias = []
    inputsTecnologias.forEach(input => {
        if(input.value.trim() !== ''){
            nomesTecnologias.push(input.value)
        }
    })
    
    // Pegar tempo de experiência selecionado para cada tecnologia
    const tempoExpArray = []
    for(let i = 1; i <= indice; i++){
        const radioSelecionado = document.querySelector('input[name="tempo-exp'+i+'"]' + ':checked')
        if(radioSelecionado){
            tempoExpArray.push(radioSelecionado.value)
        }
    }
    
    console.log("Cadastro:")
    console.log("Nome:", nomeCandidato)
    console.log("Tecnologias:", nomesTecnologias)
    console.log("Tempo de Experiência:", tempoExpArray)
    console.log({nomeCandidato, nomesTecnologias, tempoExpArray})
    
    // Voltar para tela original
    formulario.reset()
    
    const listaItems = listaTecnologias.querySelectorAll('li')
    listaItems.forEach(li => li.remove())
    
    indice = 0
    
    alert('Cadastro realizado com sucesso!')

})
