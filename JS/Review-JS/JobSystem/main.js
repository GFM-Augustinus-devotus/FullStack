const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        //1. nome, quantidade de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    window.alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga")
    const descricao = prompt("Informe a descrição da vaga")
    const dataLimite = prompt("Informe uma data limite para vaga (dd/mm/yyyy)")
    const confirmacao = confirm("Dejesa criar uma vaga com essa informações?\n"+
        "Nome: "+ nome+"\nDescrição: " + descricao + "\nData Limite: " + dataLimite
    )
    if(confirmacao){
        const novaVaga = {nome: nome,descricao: descricao,dataLimite: dataLimite, candidadto: []}
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso")
    }else{
        alert("Voltando...")
    }
}

do {
    i = parseFloat(window.prompt("Escolha uma opção de 1 a 6"))
    switch(i){
        case 1:
            window.alert("Listar Vagas")
            break
        case 2:
            window.alert("Criar uma nova vaga")
            break
        case 3:
            window.alert("Mostrar Vaga específica")
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

