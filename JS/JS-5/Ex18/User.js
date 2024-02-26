class User{
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(tryE, tryP){
        if(tryE === this.email && tryP === this.password)
            return console.log("suceed")
        else console.log("Not succed")
    }
}

const Romeo = new User("Romeo", "romeo@dev.com", "romeo123")

console.log(Romeo)

Romeo.login("Romeo@dev.com", "romeo123")