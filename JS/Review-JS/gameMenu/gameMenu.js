const opcao =  parseFloat(window.prompt("Escolha uma opção: \n1-Jogar\n2-Acessar Deck\n3-Configurações\n4-Sair"))

switch(opcao){
    case 1:
        alert("Bem-vindo ao Yu-Gi-Oh")
        break
    case 2:
        alert("Deck - Gabriel")
        break
    case 3:
        alert("Configurações Gerais...")
        break
    case 4:
        alert("Até logo...")
        break
    default:
        alert("Digite a opção correta!!!")
}