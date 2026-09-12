export{Installment}

class Installment{ //Toda instância da parcela se inicia como não paga
    constructor(value, number){
        this.value = value
        this.number = number
        this.status = 'pending'
    }
}