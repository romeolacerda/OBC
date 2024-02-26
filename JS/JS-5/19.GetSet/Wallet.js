class Wallet {
    #amount 
    #username

    constructor(){
        this.#amount = 100.99 * 100
    }

    get amount(){
        return this.#amount / 100
    }

    set username(newUSername){
        if(typeof newUSername === 'string'){
            return this.#username = newUSername
        } return console.log('username must be of type string')
    }

    get username(){
        return this.#username
    }


}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = "Romeo"
console.log(myWallet.username)

myWallet.username += "Lacerda"
console.log(myWallet.username)

myWallet.username = true