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
    document.querySelector('h2').innerHTML = 'Vez de: <span id="turnPlayer"></span>'
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

function verifyWinner(){ // Irá retornar o array das regiões que configuram uma vitória. Vertical,Horizonsta,Diagonal
    const regions = []
    if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2]){
        regions.push("0.0" , "0.1" , "0.2")
    } 
    if(virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2]){
        regions.push("1.0" , "1.1" , "1.2") 
    } 
    if(virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2]){
        regions.push("2.0" , "2.1" , "2.2")
    } 
    if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0]){
        regions.push("0.0" , "1.0" , "2.0")
    } 
    if(virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1]){
        regions.push("0.1" , "1.1" , "2.1") 
    } 
    if(virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2]){
        regions.push("0.2" , "1.2" , "2.2")
    } 
    if(virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2]){   
        regions.push("0.0" , "1.1" , "2.2")
    } 
    if(virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0]){
        regions.push("0.2" , "1.1" , "2.0")  
    }    
    return regions
}

function handleWinner(winRegion){ /*Recebe o Array Vitorioso */
    winRegion.forEach(function(reg){
        document.querySelector('[data-region="'+ reg +'"]').classList.add('win') /*Vai percorrer o array e pintar as regiões para a vitória */
    })
    boardRegion.forEach(reg => { /*Desabilitar regiões quando o jogo acaba*/
        disableRegion(reg)
    })
    document.querySelector('h2').innerHTML = document.getElementById(turnPlayer).value + ' VENCEU!'

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
    
    disableRegion(span)
    const winRegion = verifyWinner()
    if(winRegion.length > 0){
        handleWinner(winRegion)
    }else if(virtualBoard.flat().includes('')){
        turnPlayer = turnChange(turnPlayer)
        updateTitle()
    }else{
        document.querySelector('h2').innerHTML = 'EMPATE!'
    }
}

start.addEventListener('click', inicializeGame)