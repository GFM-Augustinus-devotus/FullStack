import { Account } from "./Account.js"
export { User }

//Dupla referência Usuário com a conta e a conta com o usuário

class User {
    constructor(name, email){
        this.name = name
        this.email = email
        this.account = new Account()
    }
}