// media aritimetrica simples
const ariSimples =  (...numbers) => {
    return numbers.reduce((accum, num) => accum + num, 0) / numbers.length
}

console.log(`Média aritimetrica simples ${ariSimples(1,2,3)}`)


//media aritimetrica ponderada
const ariPonderada = (...entries) => {
    // pegando da entrada entries 2 argumentos, numero e peso
    const sum = entries.reduce((accum, { number, weight}) => accum + (number * (weight ?? 1)), 0) // operador de coalescencia se weight for igual a undefined ent wiight = 1
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0)
    return sum / weightSum
}

console.log(`Média ponderada: ${ariPonderada(
    {number : 9, weight: 3},
    {number : 7},
    {number : 10, weight: 1},
)}`)

//Mediana
const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b) // organiza os items do array em ordem decresente
    const middle = Math.floor(orderedNumbers.length / 2) // essa variavel, no caso dos numeros pares, pega o segundo numero do meio
    if (orderedNumbers.length % 2 !==0 ) { // se o resto da divisão for diferente de zero significa que o numero é impar
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]// por isso essa variavel, para pegar o primeiro numero do meio
    const secondMedian = orderedNumbers[middle]
    return ariSimples(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)

//moda
const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
    const quantities = numbers.map(num => [
        num, //cara que maneira fantastica pra resolver, ele usou o map pra criar um array 
        numbers.filter(n => num === n ).length // com os elementos repetidos e pediu o tamanho desse array, tendo a quantidades de vezes que cada elemento se repetiu
    ])
    quantities.sort((a, b) => b[1] - a[1]) 
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)

