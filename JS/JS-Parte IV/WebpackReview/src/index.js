import dayjs from 'dayjs'

console.log('Revisando o Webpack e Babel...')

function mostrarData() {
  const mostrarHoje = document.getElementById('dia')
  if (mostrarHoje) {
    mostrarHoje.innerText = `Hoje é ${dayjs().format('DD/MM/YYYY')} Teste completo usando o Webpackserver`
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.mostrarData = mostrarData
})
