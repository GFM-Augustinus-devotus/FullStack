function iniciandoUsusario(nome, email, senha, tipo = "Admin"){
    const usuario = {
        
        nome, //Equivale ao caso de nome: nome
        email,
        senha,
        tipo
    
    }
    console.log(usuario)
}

iniciandoUsusario("Gabriel" , "gabrielfreitas1813@gmail.com", "1234")

//No caso irá retornar um objeto Usuário com os valores referenciados
/* Em um sistema os valores atribuídos nos parâmetros de uma função são normalmente passados por um usuário 
ou por meio de requisição no banco de dados
*/

const Aluno = {
    nome: "Gabriel",
    idade: 24,
    matricula: "201802679",
    curso: "Eng Computacação MVN",
    periodo: "2018/2",
    horas: 4132
}

function iniciandoAluno(Aluno){
    Aluno.nome,
    Aluno.idade,
    Aluno.matricula,
    Aluno.curso,
    Aluno.periodo,
    Aluno.horas
    console.log("Função Aluno instancido de forma correta")
}

iniciandoAluno(Aluno)


//Criei um Objeto Aluno, criei uma fun;áo que instancia o Aluno, e depois eu chamei a função para o programa

//Trabalhando com o retorno de funções

function calculaMedia(x , y){
    let media = (x + y) / 2  // posso retorna o valor direto ou por meio de uma variável
    return media
}

console.log(calculaMedia(6 , 4))

// Posso fazer o return junto com objetos
function adicionarProduto(nome , preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const celular = adicionarProduto("Iphone 15 pro", 5000)
console.log(celular)

//Return pode ser a chamda de outra função

function calcularAreaQaudrilatero(base , altura){
    return base * altura
}

function calcularAreaDoQuadrado(lado){
    return calcularAreaQaudrilatero(lado , lado)
}
const lado = prompt("Indique a areta do quadrado: ")
alert("A área do quadrado de lado " + lado + "cm é igual a: " + calcularAreaDoQuadrado(lado) + "cm2")