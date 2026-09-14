import { Account } from "./Account.js"
export { User }

//Dupla referência Usuário com a conta e a conta com o usuário

class User {
    constructor(fullname, email){
        this.name = fullname
        this.email = email
        this.account = new Account(this)
    }
}