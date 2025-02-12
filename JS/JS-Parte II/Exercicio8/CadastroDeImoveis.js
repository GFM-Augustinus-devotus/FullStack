let imoveis = []
let imoveisCadastrados = ""
let possuiGaragem = false
let comando = 0

Propriedade = {
    Proprietario: "",
    QuantidadeQuartos: 0,
    QuantidadeBanheiros: 0,
    Garagem: ""
}

function cadastrarPropriedade(prop , qq , qb , g){
    let propriedade = Object.create(Propriedade)
    propriedade.Proprietario = prop
    propriedade.QuantidadeQuartos = qq
    propriedade.QuantidadeBanheiros = qb
    propriedade.Garagem = g
    return propriedade
}


do{

    comando  = parseFloat(prompt(
        "Bem vindo ao Cadastramento de Imóveis! \n" +
        "Imóveis cadastrados: " + imoveis.length +  "\n\n" +
        "1 - Cadastrar no Imóvel \n" + 
        "2 - Mostrar Imóveis Cadastrados \n" +
        "3 - Sair do Sistema"
    ))

    switch(comando){    

        case 1: 
            let Proprietario = prompt("Informe o nome do proprietário:")
            let QuantidadeQuartos = parseFloat(prompt("Informe a quantidade de quartos:"))
            let QuantidadeBanheiros = parseFloat(prompt("Informe a quantidade de banheiros:"))
            let Garagem = prompt("Possui garagem? (sim/não)")
            let confirmacao = confirm("Deseja confirmar o cadastro?")
            if (confirmacao){
                imoveis.push(cadastrarPropriedade(Proprietario , QuantidadeQuartos , QuantidadeBanheiros , Garagem))
                alert("Imóvel cadastrado com sucesso")
            }else{
                comando = 1
            }
            break

        case 2: 
            if(imoveis.length === 0){
                alert("Não há nenhum imóvel cadastrado")
                break
            }
            for(let i = 0; i < imoveis.length; i++){
                imoveisCadastrados += "Imóvel (" + (i+1) + ")\n" +  
                "Proprietário: " + imoveis[i].Proprietario + "\n" + 
                "Quantidade de Quartos: " + imoveis[i].QuantidadeQuartos + "\n" + 
                "Quantidade de Banheiros: " + imoveis[i].QuantidadeBanheiros + "\n" +
                "Possui Garagem? "+ imoveis[i].Garagem + "\n\n"
            }
            alert("Os imóveis cadastrados são: \n\n " + imoveisCadastrados)
            imoveisCadastrados = ""
            break
            
        case 3: 
            window.close()
            break
        default:
            alert("Comando inexistente!")
            break
    }

}while(comando !== 3)