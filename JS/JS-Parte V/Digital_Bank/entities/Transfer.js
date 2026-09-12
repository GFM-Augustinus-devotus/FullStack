export { Transfer }

class Transfer { 
    constructor(sendUser, reciveUser, value){ 
        this.sendUser = sendUser
        this.reciveUser = reciveUser
        this.value = value
        this.createdAt = new Date()
    }
}