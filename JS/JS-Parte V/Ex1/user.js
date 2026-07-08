class User {
    constructor(fullname,email,password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password){
        if(email === this.email && password === this.password){
            console.log("Login bem sucedido")
        }else{
            console.log("Email ou senha incorretos")
        }
    }
}

const user1 = new User("Gabriel Melo", "teste@gmail.com", "@1234")
user1.login("teste@gmail.com", "@1234")

console.log(user1)