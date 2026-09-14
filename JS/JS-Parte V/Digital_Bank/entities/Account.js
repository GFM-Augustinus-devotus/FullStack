export{Account}

class Account{
     #balance

    constructor(user){
        this.user = user
        this.deposits = []
        this.transfers = []
        this.loans = []
        this.#balance = 0
    }

    get balance(){
        return this.#balance
    }

    //Ira trabalhar como objetos

    addDeposit(deposit){ 
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer){
        if(transfer.reciveUser.email === this.user.email){

            this.#balance += transfer.value
            this.transfers.push(transfer)

        }else if (transfer.sendUser.email === this.user.email){

            this.#balance -= transfer.value
            this.transfers.push(transfer)
            
        }
    }
}