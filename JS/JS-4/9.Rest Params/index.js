function sum (...number){
    return number.reduce((accum, num) => accum + num, 0)
}


console.log(sum(1,1))
// agora a funcão pode receber n parametros
console.log(sum(2,2,2,2,2,2,2,2,2,2,2,2,2))
