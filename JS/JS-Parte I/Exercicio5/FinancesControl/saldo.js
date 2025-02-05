let saldo = 0;
let escolha = "";
saldo = parseFloat(window.prompt("Digite o saldo inicial: "));

do{
    escolha = window.prompt("Digite a opção desejada: adicionar, sacar, consultar ou sair: ");
    switch(escolha){
        case "adicionar":
        saldo += parseFloat(window.prompt("Digite o valor a ser adicionado: "));
        break;

        case "sacar":
        saldo -= parseFloat(window.prompt("Digite o valor a ser sacado: "));
        break;

        case "consultar":
        alert("Saldo atual: " + saldo);
        break;

        case "sair":
        break;
    }
}while(escolha !== "sair")

alert("Saldo final: " + saldo + "\nObrigado por usar o FinancesControl!");