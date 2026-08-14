import { User } from "./User.js"
export { Transfer }

class Transfer { 
    constructor(sendUser, reciveUser, value, date){
        this.sendUser = new User()
        this.reciveUser = new User()
        this.value = value
        this.date = date
    }
}