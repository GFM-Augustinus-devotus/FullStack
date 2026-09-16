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

console.log(App.findUserByEmail("gabriel@gmail.com"))
console.log(App.findUserByEmail("gabriel@gmail.com").account)

console.log(App.findUserByEmail("william@gmail.com"))
console.log(App.findUserByEmail("william@gmail.com").account)

console.log(App.findUserByEmail("sabrina@gmail.com"))
console.log(App.findUserByEmail("sabrina@gmail.com").account)

//Vendo todos os usersde forma direta

console.log(App.users)

//Vamos ver todos os depositos de um usuário sem usar o findUserByEmail

console.log(App.users[0].account.deposits)

// Vendo os installments do Loan de um usuário utilizando o findUserByEmail

console.table(App.findUserByEmail("sabrina@gmail.com").account.loans[0].installment)

//// ***** Atenção, parece que a quantidade de parcelas estão vindo de forma dobradas