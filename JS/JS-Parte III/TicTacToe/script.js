const main = document.getElementsByTagName('main')
const start = document.getElementById('start')
const boardRegion = document.querySelectorAll('#gameBoard span')
let virtualBoard = [] /*Matriz que mostra a dinâmica dos jogos*/ 
let turnPlayer = ''

/*Data-region vai identificar qual quadrante do jogo da velha for marcado*/

function updateTitle(){
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function inicializeGame(){
    virtualBoard = [['', '' , ''], ['' ,'' , ''], ['' , '', '']]
    turnPlayer = "player1"
    document.getElementById('turnPlayer').innerText = ''
    updateTitle()
    boardRegion.forEach(function(reg){
        reg.innerText = ''
        reg.classList.remove('win')
        reg.addEventListener('click', handleBoardClick)
    })
}

function disableRegion(element){
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}

function turnChange(turnPlayer){
    if(turnPlayer === 'player1'){
        return 'player2'
    }else if(turnPlayer === 'player2'){
        return 'player1'
    }
}

function verifyWinner(element, row, column){
    virtualBoard.forEach(function(rowBoard){
        if(JSON.stringify(rowBoard) === JSON.stringify(['X', 'X', 'X'])){
            console.log("Player 1 Ganhou")
            boardRegion.forEach(function(reg){
                reg.classList.add('win') // Pintar apenas uma linha
            })
        }
    })
}

function handleBoardClick(ev){
    const span = ev.currentTarget
    const region = span.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === "player1"){
        span.innerText = "X"
        virtualBoard[row][column] = "X"
    }else if (turnPlayer === "player2"){
        span.innerText = "O"
        virtualBoard[row][column] = "O"
    }else{
        console.error("Erro no jogo");
    }
    console.clear()
    console.table(virtualBoard)
    console.log(turnPlayer)
    disableRegion(span)
    verifyWinner(span, row, column)
    turnPlayer = turnChange(turnPlayer)
}

start.addEventListener('click', inicializeGame)