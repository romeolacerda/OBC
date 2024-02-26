function soma(a,b) {
    return a + b
}

console.log(`soma normal: ${soma(2,2)}`) 

const sum = function (a,b){
    return a + b
}

console.log(`soma anonima ${sum(2,2)}`)

const arrowsum = (a,b) => {
    return a + b
}

console.log(`soma arrow ${arrowsum(2,2)}`)

const subtract = (a,b) => {return a -  b}

console.log(`subritraia ${subtract(2,2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro: ${double(number)}`)


const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)