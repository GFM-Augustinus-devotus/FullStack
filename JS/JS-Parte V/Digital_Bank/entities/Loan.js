export {Loan}

class Loan {
    static #interestRate

    static get interestRate() {
        return #interestRate
    }

    static set interestRate(percentage){

        this.#interestRate = (percentage/100)
    }
    constructor(value, date){
        
    }
}