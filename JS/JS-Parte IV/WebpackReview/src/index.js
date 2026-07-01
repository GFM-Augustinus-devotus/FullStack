import dayjs from 'dayjs'

console.log("Revisando o Webpack e Babel...")

const mostrarHoje = document.getElementById('dia')
mostrarHoje.innerText = `Hoje é ${dayjs().format('DD/MM/YYYY')}`

//Configurar o Webpack
