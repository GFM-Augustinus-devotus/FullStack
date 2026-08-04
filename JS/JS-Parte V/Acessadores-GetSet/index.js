// Sistema para ver sua carteira digital

class Wallet{
    #ammount
    #walletName

    constructor(amount){
        this.#ammount = amount * 100 // No meu sistema eu não vou armazenar valores monetários como numeros reais
    }

    get ammount(){
        return this.#ammount / 100
    }

    set walletName(newWalletName){ //Este parâmetro refere-se ao valor de entrada inforamdo pelo usuário
        if(typeof newWalletName === 'string'){
            this.#walletName = newWalletName
        }else{
            console.log("Deve-se digitar um nome válido")
        }

    }

    get walletName(){ // My WalletName irá ter os dois acessdores get set
        return this.#walletName
    }
}

const myWallet = new Wallet(856)
console.log(myWallet.ammount) // posso manipular como se fosse uma variável

myWallet.walletName = "Carteira da Aninha" // Estou chamando o Set
myWallet.walletName = 1234 //meu set faz uma verificação e com isso retorna alguns valores

console.log(myWallet.walletName) // Estou chamando o Get