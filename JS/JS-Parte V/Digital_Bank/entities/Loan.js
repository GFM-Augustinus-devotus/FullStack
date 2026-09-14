import { Installment } from "./Installment.js"

export {Loan}

//O atributo interestRate "Taxa de Juros" ele é um método static(pode ser acessado diretamente pela classe e privado
//  ou seja não pode não pode ser acessado por um contexto externo fora de seu Get e Set)

class Loan { //Todos os usuários irão seguir a mesma taxa de juros para os seus emprétimos

    static #interestRate = 1.05 // Equivale a 5%

    static get interestRate() { //Visualizar a taxa de juros padrão do sistema

        return Loan.#interestRate 
    }

    static set interestRate(percentage){ //Modificar a taxa de juros padrão dos empréstimos

        Loan.#interestRate = 1 + (percentage/100)
    }
    constructor(value, installmentQuantity){
        this.value = value,
        this.installment = []
        for(let i = 0; i < installmentQuantity ; i++){
            
            this.installment.push(new Installment(Number(((this.value*Loan.#interestRate)/installmentQuantity).toFixed(2))), i+1)
        }
        this.createdAt = new Date()
    }
}