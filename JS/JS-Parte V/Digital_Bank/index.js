//Nesse arquivo eu posso relacionar com um formulário HTML e construi meu mini aplicativo
//Atneção para o nome da Classe App

import { App } from "./app.js"

App.createNewUser("Gabriel Melo", "gabriel@gmail.com")
App.createNewUser("William Filho", "william@gmail.com")
App.createNewUser("Sabrina Sato", "sabrina@gmail.com")

App.toDeposit("gabriel@gmail.com", 100)

App.toTransfer("gabriel@gmail.com", "william@gmail.com", 20)

App.changeInterasteRate(10)

App.takeLoan("sabrina@gmail.com", 2000, 24)

console.table(App.findUserByEmail("gabriel@gmail.com"))
console.table(App.findUserByEmail("gabriel@gmail.com").account)

console.table(App.findUserByEmail("william@gmail.com"))
console.table(App.findUserByEmail("william@gmail.com").account)

console.table(App.findUserByEmail("sabrina@gmail.com"))
console.table(App.findUserByEmail("sabrina@gmail.com").account)

//Você acessa os objetos criados e não os seus valores em sí