/*Neste Módulo foi criado as funções principais da calculadora que são passadas para os eventos da CalcMain */

import { input, output, copy, root, main, keys} from "./Calc1.js"
export {calculate, inputSet, clearSet, keySelection, switchTheme, copySelection}

function calculate(){
    output.value = "ERROR"
    output.classList.add('error')
    const result = eval(input.value)
    output.value = result
    output.classList.remove('error')
}

const inputSet = function(evKey){
    evKey.addEventListener('click', function(){
        input.value += evKey.dataset.value
    })
}

const clearSet = function(){
    input.value = '' 
    output.value = ''
    output.classList.remove('error')
    copy.classList.remove('success')
    copy.innerText = "Copy"
}

const keySelection = function(ev){
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
}

const switchTheme = function(){
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
}

const copySelection = function(ev){
    ev.preventDefault()
    if(copy.innerText === 'Copy'){
        copy.innerText = "Copied!"
        copy.classList.add('success')
        window.navigator.clipboard.writeText(output.value) /*Copia o valor para o navegador*/
    }else{
        copy.classList.remove('success')
        copy.innerText = "Copy"
    }
}