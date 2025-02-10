

let comando = "";
let fila = [];
let paciente = "";

function menuCentroMedico(comando) {
    while (comando !== "a") {
        switch (comando) {
            case "Visualizar":
                window.alert("Pacientes na fila: " + fila);
                break;
            case "Consultar":
                if (fila.length === 0){
                    window.alert("A fila já está vazia")
                    break
                }
                paciente = fila.shift();
                window.alert("O paciente " + paciente + " foi para o consultório!");
                break;
            case "Adicionar":
                fila.push(window.prompt("Digite o nome do paciente: "));
                break;
            case "sair":
                window.close()
                break;
            default:
                window.alert("Opção inválida.");
                break;
        }
        break; 
    }
}
// Carrega o elemento HTML em uma variável em JavaScript
document.addEventListener("DOMContentLoaded", function () {
    let radioButtons = document.querySelectorAll('input[name="fila"]');

    // Adiciona um ouvinte de evento para cada botão de rádio
    radioButtons.forEach(button => {
        button.addEventListener("change", function () {
            comando = this.value;  // O valor do botão de rádio selecionado
            menuCentroMedico(comando); // Chama a função passando o valor selecionado
        });
    });
});