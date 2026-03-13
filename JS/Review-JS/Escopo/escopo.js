let monnter = "skelegon" //Escopo externo

function fusao(){
    monnter = "skelegon Super Dragon" //Escopo interno. Referenciando a mesma variavel
}

console.log(monnter)
fusao()
console.log(monnter)

//Variáveis criadas num escopo mais interno, não fucionam num escopo mais externo

function cadastrarNome(){
    let nome = "Gabriel"
}

cadastrarNome()

//console.log(nome) // nome is nor defined

// Declaração por var ignora a questão de escopo

function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true
        let situacao = "Aprovado"
    } 
    console.log(nota)
    console.log(aprovado)
    //console.log(situacao)
}

avaliarNota(97)

function cadastrarNomeVar(){ // para escopo de funções var não funciona fora dele. Apenas para laços e estruturas condicionais
    var nome = "Gabriel"
    return nome
}

//console.log(nome)