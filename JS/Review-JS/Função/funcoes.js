function ola(){ // Isso é apenas a declaração da Função
    console.log("Olá mundo")
}

ola //referencia a função como variável mas não a executa

for(let i = 0 ; i < 5; i++){
    ola() // Aqui está chamando a função
}

// Parâmetros da função

function dobro(numero = 0){
    console.log( `O dobro de ${numero} é ${2*numero}`)
}

dobro(18)
dobro() // Você não passou o parâmetro então o valor é undefined. undefined * 2 é Not a number mas um erro numérico

//Impedir undefided faz o valor de numero igual a zero

function criarUsuario(nome, email, senha, tipo = "admin"){ //Construtor de objetos
    const usuario = {
        nome, //nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "admin", email, senha,){ //Parâmetros com valor padrão devem ser os últimos na lista de parâmetros de uma função
        const usuario = {
        nome, //nome: nome
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("Gabriel", "gabriel@gmail.com", "1234")
novoUsuario("Gabriel", "gabriel@gmail.com", "1234") // A ordem dos parâmetros importam

function muitosParametros(nome, data, email, senha, tipo, rotulo){

}

function objetoComoParametro(usuario){
    console.log(usuario)
}

const dadosUsuario = {
        nome: "Gabriel",
        email: "gabriel@rmail.com",
        senha: "1234",
        tipo: "Suporte"
}


// Passa um objeto como parâmetro da função

objetoComoParametro(dadosUsuario)

//Trabalahndo com o retorno de funções

function calcularMediaAritmetica(num1,num2){
    return Math.floor((num1 + num2)/2)
}

let num1 = Math.floor(Math.random() * 100) + 1 // +1 pois começa a contar a partir de zero. Math.floor retorna o valor inteiro
let num2 = Math.floor(Math.random() * 100) + 1 

// Por padrão função que não tem return, ela devolve um undefined

function criarProduto(nome,preco){
    const produto = {
        nome, 
        preco,
        estoque: calcularMediaAritmetica(num1,num2) // Funções dentro de funções
    }
    
    return produto
}

const notebook = criarProduto("Intere core i3 8GB", 2500)

console.log(notebook)

// Retorno de uma função pode ser até outra função

function areaRetangulo(base, altura){
    return base * altura
}

function areaQuadrado(lado){
    return areaRetangulo(lado,lado)
}

console.log(areaQuadrado(7))

