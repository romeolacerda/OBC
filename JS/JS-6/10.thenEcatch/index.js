function execute (){
    //any
    return new Promise((resolve, reject) => {
        console.log("A promisse esta sendo executada")
        setTimeout(() => {
            if(false){
                reject('a promisse foi rejeitada')
            } else {
                console.log("Resolvendo a promisse")
                resolve('42')
            }
        }, 2000);
    })

}

const p = execute().then((result) => {
    console.log(`a promisse foi resolvida o resultado foi ${result}`)
}).catch((err) => {
    console.log("A promisse foi rejeitada" + err)
}).finally(() => {
    console.log('\nA promisse foi finalizada')
})