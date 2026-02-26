let opt = prompt("Escolha uma opção:\nEntrar\nVerificar\nConfigurar\nSuspender\nEncerrar")

do{
    switch (opt){
        case "Entrar":
            alert("Você entrou no sistema")
            opt = prompt("Escolha uma opção:\nEntrar\nVerificar\nConfigurar\nSuspender\nEncerrar")
            break
        case "Verificar":
            alert("Você entrou na etapa de verificação")
            opt = prompt("Escolha uma opção:\nEntrar\nVerificar\nConfigurar\nSuspender\nEncerrar")
            break
        case "Configurar":
            alert("Você entrou nas configurações do sistema")
            opt = prompt("Escolha uma opção:\nEntrar\nVerificar\nConfigurar\nSuspender\nEncerrar")
            break
        case "Suspender":
            alert("O sistema foi suspenso")
            opt = prompt("Escolha uma opção:\nEntrar\nVerificar\nConfigurar\nSuspender\nEncerrar")
            break
        case "Encerrar":
            break
        default:
            alert("Você escolheu uma opção inválida")
            opt = prompt("Escolha uma opção:\nEntrar\nVerificar\nConfigurar\nSuspender\nEncerrar")
    }
}while(opt !== "Encerrar")

window.alert("o Sistema está sendo encerrado...")