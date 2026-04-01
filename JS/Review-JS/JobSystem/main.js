let listaVagas = []
let listaCandidatos = []
let i = 0

do {
    i = parseFloat(window.prompt("Escolha uma opção de 1 a 6"))
    switch(i){
        case 1:
            window.alert("Listar vagas disponíveis")
            break
        case 2:
            window.alert("Criar uma nova vaga")
            break
        case 3:
            window.alert("Visualizar uma vaga")
            break
        case 4:
            window.alert("Inscrever um candidato em uma vaga")
            break
        case 5:
            window.alert("Excluir uma vaga")
            break
        case 6:
            window.alert("Saindo...")
            window.close()
            break
        default:
            window.alert("Escolha uma opção correta")
    } 
} while(i !== 6)