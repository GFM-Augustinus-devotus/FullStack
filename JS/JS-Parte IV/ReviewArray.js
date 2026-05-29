const jogadores = [
  { nome: "Lionel Messi", gols: 830, idade: 38 },
  { nome: "Cristiano Ronaldo", gols: 890, idade: 41 },
  { nome: "Neymar Jr", gols: 440, idade: 34 },
  { nome: "Kylian Mbappé", gols: 330, idade: 27 }
];

/*map()
Cria um novo array com o mesmo tamanho, transformando os dados de cada elemento.Para que serve: 
Extrair ou modificar propriedades.Exemplo: Criar uma lista apenas com os nomes dos jogadores.
*/

const nomes = jogadores.map(jogador => jogador.nome);
// Resultado: ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr", "Kylian Mbappé"]


/*filter()
Cria un novo array contendo apenas os elementos que passam em uma validação (retornam true).
Para que serve: Filtrar e remover o que você não quer.Exemplo: Selecionar apenas jogadores com menos de 35 anos.
*/

const jovens = jogadores.filter(jogador => jogador.idade < 35);
// Resultado: [{ nome: "Neymar Jr", ... }, { nome: "Kylian Mbappé", ... }]

/*reduce()
Reduz todo o array a um único valor (como um número, uma string ou um objeto).
Para que serve: Somar valores, calcular médias ou agrupar dados.
Exemplo: Somar o total de gols de todos os jogadores da lista.
*/

const totalGols = jogadores.reduce((acumulador, jogador) => acumulador + jogador.gols, 0);
// O '0' é o valor inicial do acumulador.
// Resultado: 2490

// Caso de Reduce que transforma um Array em um objeto
const dicionarioGols = jogadores.reduce((acumulador, jogador) => {
  // Adiciona uma nova propriedade ao objeto acumulador
  acumulador[jogador.nome] = jogador.gols;
  
  // Você SEMPRE precisa retornar o acumulador para a próxima iteração
  return acumulador;
}, {}); // <- O {} indica que começamos com um objeto vazio



a = {
  "Lionel Messi": 830,
  "Cristiano Ronaldo": 890,
  "Neymar Jr": 440,
  "Kylian Mbappé": 330
}



/*sort()
Ordena os elementos do array modificando o array original (ele não cria uma cópia por padrão).Para que serve:
 Alinhar itens em ordem alfabética ou numérica.Atenção: Para números, você precisa de uma função de comparação (a, b).
 Exemplo: Ordenar os jogadores do que tem mais gols para o que tem menos.
*/

// (b - a) ordena de forma decrescente
const ordemGols = jogadores.sort((a, b) => b.gols - a.gols);
// Resultado: Cristiano Ronaldo primeiro, seguido por Messi, Neymar e Mbappé.

console.log(nomes)
console.log(jovens)
console.log(totalGols)
console.log(dicionarioGols)
console.log(ordemGols)