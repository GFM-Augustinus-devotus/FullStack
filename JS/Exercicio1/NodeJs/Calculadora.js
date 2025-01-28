// Calculadora das 4 operações básicas para dois valores numéricos

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funções de operação
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Não é possível dividir por zero!";
    }
    return a / b;
}

// Função para realizar as operações
function realizarOperacoes() {
    rl.question('Digite o primeiro valor: ', (valor1) => {
        let PrimeiroValor = parseFloat(valor1);

        // Verifica se o valor inserido é um número válido
        if (isNaN(PrimeiroValor)) {
            console.log("Por favor, insira um número válido.");
            rl.close();
            return;
        }

        rl.question('Digite o segundo valor: ', (valor2) => {
            let SegundoValor = parseFloat(valor2);

            // Verifica se o valor inserido é um número válido
            if (isNaN(SegundoValor)) {
                console.log("Por favor, insira um número válido.");
                rl.close();
                return;
            }

            // Exibe os resultados das operações
            console.log(`\nResultados para os valores ${PrimeiroValor} e ${SegundoValor}:`);
            console.info(`Soma: ${soma(PrimeiroValor, SegundoValor)}`);
            console.info(`Subtração: ${subtracao(PrimeiroValor, SegundoValor)}`);
            console.info(`Multiplicação: ${multiplicacao(PrimeiroValor, SegundoValor)}`);
            console.info(`Divisão: ${divisao(PrimeiroValor, SegundoValor)}`);

            // Pergunta se o usuário deseja realizar outra operação
            rl.question('\nDeseja realizar outra operação? (s/n) ', (resposta) => {
                if (resposta.toLowerCase() === 's') {
                    realizarOperacoes(); // Chama a função novamente para reiniciar
                } else {
                    console.log('Obrigado por usar a calculadora!');
                    rl.close(); // Fecha o readline quando o usuário deseja encerrar
                }
            });
        });
    });
}

// Chama a função para iniciar as operações
realizarOperacoes();


/* 
Primeiro, você precisa importar o módulo readline.
Criar a interface de leitura.
Ler o comando do usuário e executar algo com ele.
 */

