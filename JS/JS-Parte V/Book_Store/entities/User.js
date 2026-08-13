export{User}

class User {
    #id
    constructor(name, email, password){
        this.#id = Math.floor(Math.random()* 900000) + 100000
        this.name = name
        this.email = email
        this.password = password
    }

    get data(){
        return{
            id: this.#id,
            name:  this.name,
            email: this.email
        }
    }
}