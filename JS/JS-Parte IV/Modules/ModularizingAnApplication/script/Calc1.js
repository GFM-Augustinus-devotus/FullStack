/*Aqui é armazenado as variáveis que são definidas pelos elementos do DOM*/ 

export {main , root, input, output, button, switchButton, clear, equal, copy, keys}

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