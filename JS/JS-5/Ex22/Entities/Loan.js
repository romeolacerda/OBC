const Installments = require("./Installment")

module.exports = class Loan {
    static #fees = 1.03 // why the one? to multipli once and make the count easier 

    constructor(value, installments){
        this.value = value
        this.installments = []
        for(let i = 1; i <= installments; i++){
            this.installments.push(new Installments((value* Loan.#fees) / installments, i))
        }
        this.date = new Date()
    }

    static get fees(){
        return this.#fees * 100
    }

    static set newFee(value){
        return this.#fees = 1 + (value / 100)
    }
}


