import { Installment } from "./installment"

export {Loan}

//O atributo interestRate "Taxa de Juros" ele é um método static(pode ser acessado diretamente pela classe e privado
//  ou seja não pode não pode ser acessado por um contexto externo fora de seu Get e Set)

class Loan { //Todos os usuários irão seguir a mesma taxa de juros para os seus emprétimos
    static #interestRate

    static get interestRate() { //Visualizar a taxa de juros padrão do sistema

        return Loan.#interestRate 
    }

    static set interestRate(percentage){ //Modificar a taxa de juros padrão dos empréstimos

        Loan.#interestRate = (percentage/100)
    }
    constructor(value, date, installmentQuantity){
        this.value = value,
        this.date = date,
        this.installment = new Installment(Number((this.value/installmentQuantity).toFixed(2)))
    }
}