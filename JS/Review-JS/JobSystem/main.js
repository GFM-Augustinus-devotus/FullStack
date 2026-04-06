let listaCandidatos = [["Gustavo", "Gabriel"], ["Ana", "Daniel", "Deusdeth"]] // Array de array para separar as diferentes listas de candidatos
let i = 0
// Dentro da lista de vagas vai a lista de candidatos para saber os nomes dos candidatos de uma vaga de empregos
let listaVagas = [
    {indice: 1, nome: "Front-End", descricao:"Desenvolvedor Web Front-End de sites", data: "29/05/2026", qtdCandidatos: listaCandidatos[0].length, candidatos: listaCandidatos[0]},
    {indice: 2, nome: "Back-End", descricao: "Desenvolvedor Back-End Java e Angular", data: "16/04/2026",qtdCandidatos: listaCandidatos[1].length, candidatos: listaCandidatos[1]}
]

const nomeVagas =  listaVagas.map(function(vaga){
    return "indice: " + vaga.indice + " nome: " + vaga.nome + " Quantitade Candidatos: " + vaga.qtdCandidatos 
})

const nomesCandidatos = listaVagas.map(function(vaga){
// Pensar numa forma de retornar apenas os candiadatos das vagas selecionadas
    return vaga.candidatos
})

do {
    i = parseFloat(window.prompt("Escolha uma opção de 1 a 6"))
    switch(i){
        case 1:
            window.alert(nomeVagas)
            break
        case 2:
            window.alert("Criar uma nova vaga")
            break
        case 3:
            window.alert(nomesCandidatos)
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

