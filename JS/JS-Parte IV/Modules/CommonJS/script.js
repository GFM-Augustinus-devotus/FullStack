const render = require("./render.js")
const store = require("./store.js")

function init(){
    console.log("Iniciando o sistema...")
}

function exit(){
    console.log("Finalizando o sistema...")
}

init()
render()
store()
exit()