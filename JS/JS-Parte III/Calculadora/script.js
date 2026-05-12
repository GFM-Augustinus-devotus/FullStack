const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const output = document.getElementById('output')
const button = document.querySelectorAll('.button-value')
const switchButton = document.getElementById('switch-theme')
const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
const copy = document.getElementById('copy')

const keys = ['(' , ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%']

button.forEach(function(evKey){
    evKey.addEventListener('click', function(){
        input.value += evKey.dataset.value
    })
})

clear.addEventListener('click', function(){
    input.value = '' 
    output.value = ''
    output.classList.remove('error')
    copy.classList.remove('success')
    copy.innerText = "Copy"
})

equal.addEventListener('click', calculate)

input.addEventListener('keydown', function(ev){
    ev.preventDefault()

    if(keys.includes(ev.key)){
        input.value += ev.key
        return
    }
    
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0 , -1)
    } 
    
    if(ev.key === 'Enter')
        if(input.value !== ''){
            calculate()
        }
})

function calculate(){
    output.value = "ERROR"
    output.classList.add('error')
    const result = eval(input.value)
    output.value = result
    output.classList.remove('error')
}

switchButton.addEventListener('click', function(){
    if(main.dataset.theme == 'dark'){
        root.style.setProperty("--bg-color", "#f1f5f9")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        root.style.setProperty("--border-color", "#aaa")
        main.dataset.theme = 'light'
    } else if(main.dataset.theme == 'light'){
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        root.style.setProperty("--border-color", "#666")
        main.dataset.theme = 'dark'
    }
})

copy.addEventListener('click', function(ev){
    ev.preventDefault()
    if(copy.innerText === 'Copy'){
        copy.innerText = "Copied!"
        copy.classList.add('success')
        window.navigator.clipboard.writeText(output.value) /*Copia o valor para o navegador*/
    }else{
        copy.classList.remove('success')
        copy.innerText = "Copy"
    }
})
