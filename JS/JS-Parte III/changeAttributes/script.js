// Podemos Manipular qualquer atributo do HTML com o JS
const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = "Olá mundo!"  //Operador Ternário

    console.log(input.value) //Comportamento dinâmico, valor em tempo real
    console.log(input.getAttribute('value')) // Pega o valor pré definido
})

document.getElementById('type').addEventListener('click', function(){
    //input.type = input.type !== 'radio' ? 'radio' : 'text'
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'digite algo'
})

document.getElementById('disabled').addEventListener('click', function(){
    if(input.disabled == false){
        input.disabled = true
    }else{
        input.disabled = false
    }
})

//Atributos data : (Armazenar valores customisáveis pelo HTML). Você os chame por meio do atributo dataset

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log("O valor de data something é " + data)
    input.dataset.something = "Segundo valor setado"
    console.log("O valor de data something é " + data)
})