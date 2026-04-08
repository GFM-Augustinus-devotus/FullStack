const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        //1. nome, quantidade de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome 
        textoFinal += " (" + vaga.candidato.length + " candidatos)\n"
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
        const novaVaga = {nome: nome, descricao: descricao, dataLimite: dataLimite, candidato: []}
        vagas.push(novaVaga)
        alert("Vaga criada com sucesso!")
    }else{
        alert("Voltando...")
    }
}

function exibirVaga(){
    const indice = parseFloat(prompt("Informe o indice da vaga que deseja exibir: "))
    const vaga = vagas[indice]
    const candidatosEmTexto = vaga.candidato.reduce(function(textoFinal, candidatoAtual){
        return textoFinal + "\n - " + candidatoAtual
    }, "")

    alert("Vaga n° "+ indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidato.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do candidato")
    const indice = parseFloat(prompt("Informe o índice da vaga que o candidato deseja se inscrever"))
    const vaga = vagas[indice]

    const confirmacao = confirm("Deseja inscrever o candidato " + candidato + "?\n"+
        "Nome: "+ vaga.nome + "\nDescrição: "+ vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )

    if (confirmacao){
        vaga.candidato.push(candidato)
        alert("Candidato inscrito com sucesso!")
    }else{
        alert("Voltando...")
    }
}

function excluirVaga(){
    const indice =  parseFloat(prompt("Informe o índice da vaga que o candidato deseja se inscrever"))
    const vaga = vagas[indice]
    const confirmacao = confirm("Tem certeza que deseja excluir a vaga " + indice + " ?\n" + 
        "Nome: "+ vaga.nome + "\nDescrição: "+ vaga.descricao + "\nData Limite: " + vaga.dataLimite
    )
    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluída com sucesso!")
    }
}
function executar(){
    let i = 0
    do {
        i = parseFloat(window.prompt("Sistema de vagas de emprego"+
            "\n\nEscolha uma das opções abaixo:"+
            "\n1. Listar vagas"+
            "\n2. Criar nova vaga"+
            "\n3. Mostrar vaga específica"+
            "\n4. Inscrever um candidato em uma vaga"+
            "\n5. Excluir uma vaga"+
            "\n6. Sair do programa"
        ))
        switch(i){
            case 1:
                listarVagas()
                break
            case 2:
                novaVaga()
                break
            case 3:
                exibirVaga()
                break
            case 4:
                inscreverCandidato()
                break
            case 5:
                excluirVaga()
                break
            case 6:
                window.alert("Saindo...")
                window.close()
                break
            default:
                window.alert("Escolha uma opção correta")
        } 
    } while(i !== 6)
}
executar()


