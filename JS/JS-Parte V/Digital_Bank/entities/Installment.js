export{Installment}

class Installment{ //Toda instância da parcela se inicia como não paga
    constructor(value, number, state){
        this.value = value
        this.number = number
        this.state = 'pendente'
    }
}