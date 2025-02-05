let cidade = "";
let QuantidadeCidades = 0;
let condicao = "sim";
let nomeTurista = window.prompt("Qual o seu nome: ");

condicao = window.prompt("Você visitou alguma cidade? (sim/não)");
while (condicao === "sim") {
    cidade += ( " - " + window.prompt("Digite o nome da cidade: ") + "\n");
    QuantidadeCidades++;
    condicao = window.prompt("Você visitou alguma outra cidade? (sim/não)");
}


window.alert(nomeTurista + " visitou " + QuantidadeCidades + " cidade(s)\n" + cidade);