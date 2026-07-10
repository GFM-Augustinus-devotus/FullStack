//Neste meu caso para se criar uma nova conta é necessário que exista um usuário para ela.
// # indica se um atributo ou método é privado

class Account {
    //ATRIBUTOS PRIVADOS
    #password
    #balance = 0
    constructor(user){
        this.email = user.email
        this.#password = user.password
    }
    //MÉTODO PRIVADO
    #authenticate(email, password){
        return this.email === email && this.#password === password
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance
        }else{
            return null
        }
    }

}

const user = {
    email: "gabriel@email.com",
    password: "14df58"
}

const firstAccount = new Account(user)

console.log(firstAccount)
console.log(firstAccount.getBalance("gabriel@email.com", "14df58"))