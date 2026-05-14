const main = document.getElementById('game')
const namePlayer1 = document.getElementById('name1')
const namePlayer2 = document.getElementById('name2')
const names = document.getElementById('players')
const start = document.getElementById('start')
const restart = document.getElementById('restart')
const buttons = document.querySelectorAll('.game-button')

/*Constantes relacionadas ao turno dos jogadores*/
const player1 = true
const plaeyr2 = false

start.addEventListener('click', function(ev){
    ev.preventDefault()
    if(namePlayer1.value === ''){
        alert("Insira o nome do player 1")
        return
    }else if(namePlayer2.value === ''){
        alert("Insira o nome do Player 2")
        return
    }
    names.innerText = namePlayer1.value + ' X ' + namePlayer2.value
    buttons.forEach(btn =>{
        btn.disabled = false
    })
})

restart.addEventListener('click', function(ev){
    ev.preventDefault()
    namePlayer1.value = ''
    namePlayer2.value = ''
    names.innerText = ''
})

function playerTurn(){ /*Essa função deve ser assíncrona*/
    if(player1){
        alert("Player 1 Turn")
    }
}