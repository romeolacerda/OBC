function execute (){
    //any
    return new Promise((resolve, reject) => {
        console.log("A promisse esta sendo executada")
        setTimeout(() => {
            console.log("Resolvendo a promisse")
            resolve('resultado')
        }, 1000);
    })

}

const p = execute()
console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000);