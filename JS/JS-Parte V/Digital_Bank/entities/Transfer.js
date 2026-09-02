import { User } from "./User.js"
export { Transfer }

class Transfer { 
    constructor(sendUser, reciveUser, value, date){ //os parâmetros vão dentro da instanciação de User
        this.sendUser = new User(sendUser)
        this.reciveUser = new User(reciveUser)
        this.value = value
        this.date = date
    }
}