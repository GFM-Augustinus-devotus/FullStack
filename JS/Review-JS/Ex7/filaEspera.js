let fila = ['Matheus', 'Marcos', 'Lucas', 'João']

const adicionarButton =  document.getElementById('AdicionarNovoPaciente')
const novoPaciente = document.getElementById('novoPaciente')
const listaPacientes = document.getElementById('pacientes')

function adicionar(nome){
    nome = novoPaciente.value
    if(nome != null){
        fila.push(nome)
        console.log(fila)
        novoPaciente.value = ""

        const newLi =  document.createElement('li')
        newLi.className = "Pacientes"
        newLi.id = "Paciente (" + fila.length+1 + ")"
        newLi.innerText = nome
        listaPacientes.append(newLi)

    }
}

function mostrarPacientes(){

    for(let i = 0; i<fila.length; i++){
        const newLi =  document.createElement('li')
        newLi.className = "Pacientes"
        newLi.id = "Paciente (" + i + ")"
        newLi.innerText = fila[i].toString()
        listaPacientes.append(newLi)
    }
}

mostrarPacientes()

function sair(){
    window.close()
}

// Observação(Visual você coloca o nome direto agora na lista coloca o nome depois)
// Eventos e elemtos de HTML não podem ser executados no prompt node.js
//Atenção: Não confunda o elemento com o conteúdo que está sendo criado dentro dele
