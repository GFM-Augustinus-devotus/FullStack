function changeToLight(){
    document.body.style.color = '#212529' //Inline (Preferência maior)
    document.body.style.backgroundColor = '#f1f5f9'
}

function changeToDark(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'

}

function swicthTheme(){ // Irá trabalhar com classes. Elemento Recebe ou tira uma classe
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')

}

document.getElementById('lightBtn').addEventListener('click', changeToLight)
document.getElementById('darkBtn').addEventListener('click', changeToDark)
document.getElementById('switchBtn').addEventListener('click', swicthTheme)