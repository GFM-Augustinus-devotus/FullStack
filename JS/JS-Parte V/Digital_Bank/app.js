import { User } from "./entities/User.js"
import { Deposit } from "./entities/Deposit.js"
import { Loan } from "./entities/Loan.js"
import { Transfer } from "./entities/Transfer.js"

export { App }

class App {

    //Todo user tem uma instância de Account ne sua construção
    static #users = []

    static createNewUser(fullname, email){
        const userExists = App.findUserByEmail(email) // Verifica se o usuário já existe
        if (!userExists){
            this.#users.push(new User(fullname, email))
        }
    }

    static findUserByEmail(email){
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static toDeposit(email, value){
        const user = App.findUserByEmail(email)

        if(user){
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)               
        }
    }

    static takeLoan(email, value, numberOfInstallment){
        const user = App.findUserByEmail(email)

        if(user){
            const newLoan = new Loan(value, numberOfInstallment)
            user.account.addLoan(newLoan)
        }
    }

    static toTransfer(sendUserEmail, reciveUserEmail, value){
        const sendUser = App.findUserByEmail(sendUserEmail)
        const reciveUser = App.findUserByEmail(reciveUserEmail)

        if(sendUser && reciveUser){
            const newTransfer = new Transfer(sendUser, reciveUser, value)
            sendUser.account.addTransfer(newTransfer)
            reciveUser.account.addTransfer(newTransfer)
        }
    }

    static changeInterasteRate(newPercentage){ //Como o atributo é privado você só pode modificá-lo com o Set
        Loan.interestRate = newPercentage
    }
}